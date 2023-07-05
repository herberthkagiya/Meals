import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../componentes/MealDetails";
import Subtitle from "../componentes/MealDetail/Subtitle";
import List from "../componentes/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../componentes/IconButton";

function MealDetailScreen({navigation, route}){
    const mealId = route.params.mealId

    const meal = MEALS.find((meal) => meal.id === mealId)

    function headerButtonHandler(){
        console.log("Favorite pressed");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                            icon={"star"} 
                            color={"white"} 
                            onPress={headerButtonHandler}/>
            } 
        });
    }, [navigation, headerButtonHandler])

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