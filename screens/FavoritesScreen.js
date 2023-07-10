import { useContext } from "react";
import { View, Text, StyleSheet} from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { FlatList } from "react-native-gesture-handler";
import { MEALS } from "../data/dummy-data";
import MealList from "../componentes/MealsList/MealList";
import {useSelector} from 'react-redux'

function FavoritesScreen(){

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);


    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if(favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.noFavoriteText}>You have no favorite meals yet</Text>
            </View>
        );
    }

    return (
        <MealList items={favoriteMeals} />
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },

    noFavoriteText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})