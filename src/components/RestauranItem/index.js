import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({ restaurant }) => {
    return (
        <View>
            <Image source={{ uri: restaurant.image }} style={styles.image} />

            <View style={styles.row}>
                <View>
                    <Text>{restaurant.name}</Text>
                    <Text>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
                </View>
            </View>

            <View style={styles.rating}>
                <Text>{restaurant.rating}</Text>
            </View>

        </View>
    )
}

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
    },
    subtitle: {
        color: "grey",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    }
})