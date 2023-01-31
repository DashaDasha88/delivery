import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {
        positino: "absolute",
        top: 40,
        left: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 4/3,
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10
    },
    subtitle: {
        fontSize: 15,
        color: "grey",
    },
    container: {
        margin: 10,
    },
    menuTitle:{
        marginVertical: 20,
        fontSize: 18,
        letterSpacing: 0.7,
    },
})