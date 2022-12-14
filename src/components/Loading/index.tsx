import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../themes";

import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.BACKGROUND_600} size={60} />
    </View>
  );
}
