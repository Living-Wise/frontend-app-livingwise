import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

const inputStyles = StyleSheet.create({
    input: {
        height: 65,
        width: '100%',
        marginBottom: metrics.regularMargin,
        backgroundColor: colors.tertiary,
        borderRadius: metrics.regularBorderRadius,
        padding: metrics.regularPadding,
    },

});

export default inputStyles
