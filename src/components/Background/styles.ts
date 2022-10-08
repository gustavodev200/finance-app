import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
  logoContainer: {
    alignItems: "center",
    width: "100%",
  },
  logo: {
    marginTop: -160,
  },

  content: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
});
