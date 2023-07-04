import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../componentes/MealDetails";

function MealDetailScreen({navigation, route}){
    const mealId = route.params.mealId

    const meal = MEALS.find((meal) => meal.id === mealId)

    return (
        <View style={{flex: 1}}>
            <Image source={{uri: meal.imageUrl}}/>

            <Text>{meal.title}</Text>

            
            <MealDetails 
                duration={meal.duration}
                complexity={meal.complexity}
                affordability={meal.affordability}/>

            <Text>Ingredients</Text>
            {meal.ingredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}

            <Text>Steps</Text>
            {meal.steps.map((step) => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    );
}

export default MealDetailScreen;