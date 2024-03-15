import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes } from "../routes/app.routes";

export function Routes(){
    return (
        <View className="flex-1 bg-background">
            <AppRoutes />
        </View>
    )
}
