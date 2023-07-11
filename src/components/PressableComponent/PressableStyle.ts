import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import fonts from "../../styles/fontsSizeStyle";

const pressableStyles = StyleSheet.create({
    button: {
        position: 'relative',
        left: - 8,
        bottom: 8,
        height: 62,
        flexDirection: 'row',
        width: '100%',
        borderRadius: metrics.regularBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',

        primaryBtn: {
            backgroundColor: colors.primary,
        },

        secondaryBtn: {
            backgroundColor: colors.tertiary,
        },
    },

    shadowButton: {
        position: 'relative',
        right: -8,
        height: 62,
        width: '100%',
        borderRadius: metrics.regularBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },

    img: {
        backgroundColor: 'white',
        position: 'relative',
        bottom: 0,
        left: -30,
        borderTopLeftRadius: metrics.regularBorderRadius,
        borderBottomLeftRadius: metrics.regularBorderRadius,
    },

    text: {
        fontSize: fonts.button,
    }

});

export default pressableStyles;
