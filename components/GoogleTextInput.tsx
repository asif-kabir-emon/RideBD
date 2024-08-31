import { GoogleInputProps } from "@/types/type";
import { Text, View } from "react-native";

const GoogleTextInput = ({
  icon,
  containerStyle,
  handlePress,
  textInputBackgroundColor,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row justify-center items-center relative z-50 rounded-xl mb-5 ${containerStyle}`}
  >
    <Text>Search</Text>
  </View>
);

export default GoogleTextInput;
