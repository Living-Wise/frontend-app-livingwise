import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import fonts from "../../styles/fontsSizeStyle";

const pressableStyles = StyleSheet.create({
    button: {
        position:  'relative',
        left: - 7,
        bottom: 7,
        height: 62,
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: metrics.regularBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },

    shadowButton: {
        position: 'relative',
        right: -7,
        height: 62,
        width: '100%',
        borderRadius: metrics.regularBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',        
    },

    text: {
        fontSize: fonts.button,
    }

});

export default pressableStyles;
