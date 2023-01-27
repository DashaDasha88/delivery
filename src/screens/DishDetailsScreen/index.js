import {View, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import restaurants from '../../../assets/data/restaurants.json';

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />

            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={60} color={"black"} />
                <Text style={styles.quanity}>>1</Text>
                <AntDesign name="pluscircleo" size={60} color={"black"} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,
    },
    description: {
        color: "grey",
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    quanity: {
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 20,
    }
});

export default DishDetailsScreen;