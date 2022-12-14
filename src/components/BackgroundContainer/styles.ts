import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },

  content: {
    width: "100%",
    height: "80%",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
});
