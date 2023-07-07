import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../componentes/MealDetails";
import Subtitle from "../componentes/MealDetail/Subtitle";
import List from "../componentes/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../componentes/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({navigation, route}){

    const favoriteMealsContext = useContext(FavoritesContext);

    const mealId = route.params.mealId

    const meal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

    function changeFavoriteButtonStatusHandler(){
        if(mealIsFavorite){
            favoriteMealsContext.removeFavorite(mealId);
        }
        else{
            favoriteMealsContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                            icon={mealIsFavorite ? "star" : "star-outline"} 
                            color={"white"} 
                            onPress={changeFavoriteButtonStatusHandler}/>
            } 
        });
    }, [navigation, changeFavoriteButtonStatusHandler]);
    
    return (
        <ScrollView>
            <View style={styles.innerScreenContainer}>
                <Image 
                    source={{uri: meal.imageUrl}}
                    style={styles.image}/>


                <Text style={styles.title}>{meal.title}</Text>

                
                <MealDetails 
                    duration={meal.duration}
                    complexity={meal.complexity}
                    affordability={meal.affordability}
                    textStyle={styles.detailText} />

                <View style={styles.listsOutterContainer}>
                    <View style={styles.listsInnerContainer}>
                        <Subtitle>Ingradients</Subtitle>
                        <List data={meal.ingredients}/>

                        <Subtitle>Steps</Subtitle>
                        <List data={meal.steps}/>
                    </View>
                </View>
            </View>
            
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    innerScreenContainer: {
        flex: 1,
        marginBottom: 32
    },

    image: {
        width: "100%",
        height: 300,
    },
    

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },

    detailText: {
        color: "white"
    },

    subtitle: {
        color:  'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        textAlign: 'center',
        borderBottomColor: 'white'
    },

    listsOutterContainer: {
        alignItems: 'center'
    },

    listsInnerContainer: {
        width: '80%'
    }
});