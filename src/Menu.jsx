import {StyleSheet, View, Text, Image} from "react-native"
import React, {useState, useEffect} from 'react';
const vectorImage = require('./assets/images/Vector.png');


export function  Menu() {
    const [foodItems, setFoodItems] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const url = 'https://us-central1-pv-rental.cloudfunctions.net/interview';

    function fetchMenuItems() {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({dining_hall:'ratty'})
        })
        .then(response => response.json())
        .then(json =>{
            let foodMaps = json.data
            var foodArray = foodMaps.map(mapHelper)
            setFoodItems(foodArray)
            setDataLoaded(true)
        })
    }

    /*map helper to turn food json output into 2d array */
    function mapHelper(food) {
        let returnList = [];
        returnList.push(food.name)
        returnList.push(food.calories)
        returnList.push(food.meal)
        return returnList
    }

    //fetch menu when component initially loaded
    useEffect(() => {fetchMenuItems();}, []);

    //separate food items by which mean they're served at
    breakfastFoods = [];
    lunchFoods = [];
    dinnerFoods = [];
    if(dataLoaded){
        for(i in foodItems){
            f = foodItems[i]
            if(f[2] == "breakfast"){
                breakfastFoods.push(f)
            } else if(f[2] == "lunch"){
                lunchFoods.push(f)
            } else if(f[2] == "dinner"){
                dinnerFoods.push(f)
            }
        }
    }

    const VectorComponent = () => {
        return(
        <View style={styles.vector}>
            <Image source={vectorImage}/> 
        </View>)
    }
    
    return(
        <View style={styles.root}>
            {/* Breakfast */}
            <View style={styles.meal_banner}>
                <Text style={styles.meal}>Breakfast</Text>
                <View style={styles.vector}>
                    <Text style={styles.time}>7:30 am - 11:00 am</Text>  
                </View>   
            </View>
        
            <>{breakfastFoods ? breakfastFoods.map((i) => (
                <View key={i} style={styles.item_container}>
                    <View key={i} className="foodItem" style={styles.foodItem}>
                        <Text key={i[0]} style={styles.foodName}>{i[0]}</Text>
                        <Text key={i[1]} style={styles.calories}>{i[1]} cal</Text>
                    </View>
                    <VectorComponent/>
                </View>
            )): null }
            </> 

             {/* Lunch */}
            <View style={styles.meal_banner}>
                <Text style={styles.meal}>Lunch</Text>
                <View style={styles.vector}>
                    <Text style={styles.time}>11:00 am - 4:00 pm</Text>  
                </View>    
            </View>
            <>{lunchFoods ? lunchFoods.map((i) => (
                <View key={i} style={styles.item_container}>
                    <View key={i} className="foodItem" style={styles.foodItem}>
                        <Text key={i[0]} style={styles.foodName}>{i[0]}</Text>
                        <Text key={i[1]} style={styles.calories}>{i[1]} cal</Text>
                    </View>
                    <VectorComponent/>
                </View>
            )): null }
            </> 

            {/* Dinner */}
            <View style={styles.meal_banner}>
                <Text style={styles.meal}>Dinner</Text>
                <View style={styles.vector}>
                    <Text style={styles.time}>4:00 pm - 7:30 pm</Text>      
                </View>
            </View>
            <>{dinnerFoods ? dinnerFoods.map((i) => (
                <View key={i} style={styles.item_container}>
                    <View key={i} className="foodItem" style={styles.foodItem}>
                        <Text key={i[0]} style={styles.foodName}>{i[0]}</Text>
                        <Text key={i[1]} style={styles.calories}>{i[1]} cal</Text>
                    </View>
                    <VectorComponent/>
            </View>
            )): null }
            </> 

        </View>
       
    );
}

const styles = StyleSheet.create({
    root: {
        display: `flex`,
        flexDirection: `column`,
        paddingLeft: 26,
        paddingRight: 26,
    },
    meal_banner:{
        flexDirection: `row`,
        justifyContent: 'space-between',
        paddingBottom: 14,
        paddingTop: 14,
        alignContent: 'center'
    },
    time: {
        fontFamily:"Montserrat-Medium",
        color: '#545151',
        fontSize: 14,
        alignContent: 'center'
    },
    meal: {
        fontFamily:"Montserrat-Bold",
        fontSize: 20,
        color: '#545151',
    },
    item_container: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: 'space-between',
        height: 62,
        paddingLeft: 17,
        paddingRight: 20.5,
        flexShrink: 0,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        marginBottom: 7,
        marginTop: 7,
    },
    foodItem: {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: 'center'
    },
    food: {
        fontFamily: 'Montserrat-Medium',
        color: '#545151',
        fontSize: 16,
    },
    calories: {
        fontFamily: 'Montserrat',
        color: '#9D9D9D',
        fontSize: 16,
    },
    vector: {
        justifyContent: 'center'
    },
});