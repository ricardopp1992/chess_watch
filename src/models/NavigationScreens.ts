import { FunctionComponent } from "react";
import { ScreenProps } from "react-native-screens";
import { NavigationParams, NavigationRoute, NavigationScreenConfig } from "react-navigation";
import { StackNavigationOptions, StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

export interface NavigationScreenFunctionComponent<T = {}> extends FunctionComponent<T> {
  navigationOptions?: NavigationScreenConfig<StackNavigationOptions, StackNavigationProp<NavigationRoute, NavigationParams>, ScreenProps>;
}