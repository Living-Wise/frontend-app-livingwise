import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import fonts from "../../styles/fontsSize";

const inputStyles = StyleSheet.create({
    input: {
        height: 62,
        width: '100%',
        marginBottom: metrics.regularMargin,
        backgroundColor: colors.tertiary,
        borderRadius: metrics.regularBorderRadius,
        padding: metrics.regularPadding,
        fontSize: fonts.input,
    },

});

export default inputStyles
