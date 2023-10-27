import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function LoadingOverlay() {
    return (<View style={STYLES.container}>
        <ActivityIndicator 
            size={"large"}
            color="white"
        />
    </View>)
};

export default LoadingOverlay;

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary500
    }
})