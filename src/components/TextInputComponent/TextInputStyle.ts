import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

const inputStyles = StyleSheet.create({
    input: {
        height: 65,
        width: '100%',
        marginBottom: metrics.mediumMargin,
        backgroundColor: colors.tertiary,
        borderRadius: 5,
        padding: 0,
    },

});

export default inputStyles
