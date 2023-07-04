import { View, FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from "../componentes/CategoryGridTile";


function CategoriesScreen({navigation}){

    function renderCategoryItem(category){

        function onPressHandler(){
            navigation.navigate("MealsOverview", {
                categoryId: category.item.id,
            });
        }
    
        return (
            <CategoryGridTile 
                title={category.item.title} 
                color={category.item.color}
                onPress={onPressHandler} />
        );
    }

    return (
        <View>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={CATEGORIES}
                keyExtractor={(item) => item.id} 
                renderItem={renderCategoryItem}
                numColumns={2}/>

        </View>
    );
}

export default CategoriesScreen; 