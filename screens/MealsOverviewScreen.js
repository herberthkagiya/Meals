import { Text, View, StyleSheet, FlatList } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../componentes/MealItem";
import { useNavigation } from "@react-navigation/native";


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

    function renderMealItem(meal){
        return <MealItem meal={meal.item}/>
    }

    return (
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={meals}    
                renderItem={renderMealItem}
                keyExtractor = { (meal) => meal.id } />  
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});