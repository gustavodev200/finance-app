import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
  logo: {
    marginTop: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
