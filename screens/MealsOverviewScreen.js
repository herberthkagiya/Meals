import { Text, View, StyleSheet, FlatList } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../componentes/MealsList/MealItem";
import MealList from "../componentes/MealsList/MealList";



function MealsOverviewScreen({route, navigation}){
    const categoryId = route.params.categoryId;

    const meals = MEALS.filter((meal) => {
        return  meal.categoryIds.indexOf(categoryId) >= 0;
    });


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation])



    return (
        <MealList items={meals}/>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});