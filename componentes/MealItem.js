import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, Pressable, StyleSheet, Platform} from "react-native";
import MealDetails from "./MealDetails";


function MealItem({meal}){

    const navigation = useNavigation()

    function selectMealItemHandler(){
        navigation.navigate("MealDetails", {
            mealId: meal.id
        })
    }
    
    return (
        <View style={styles.mealItem}>

            <View style={styles.innerContainer}>
                <Pressable 
                    android_ripple={{color: "#ccc"}}
                    style={({pressed}) => pressed ? styles.pressedButton : null}
                    onPress={selectMealItemHandler}>

                    <View>
                        <Image style={styles.image} source={{uri: meal.imageUrl }} />
                        <Text style={styles.title}>{meal.title}</Text>
                    </View>

                    <MealDetails 
                        duration={meal.duration}
                        complexity={meal.complexity}
                        affordability={meal.affordability}/>
                </Pressable>
            </View>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS == "android" ? 'hidden' : 'visible' 
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

    pressedButton: {
        opacity: 0.5
    },

    image: {
        width: '100%',
        height: 200
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },

    detailsItem: {
        fontSize: 12,
        marginHorizontal: 4
    }
})