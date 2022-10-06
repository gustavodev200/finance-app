import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
  logo: {
    position: "absolute",
    top: 0,
    zIndex: 100,
    marginTop: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
});
