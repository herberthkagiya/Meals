import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { MEALS } from "../../data/dummy-data";



function MealList({items}){

   
    function renderMealItem(meal){
        return <MealItem meal={meal.item}/>
    }


    return (
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={items}    
                renderItem={renderMealItem}
                keyExtractor = { (meal) => meal.id } />  
        </View>
    );
}

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});