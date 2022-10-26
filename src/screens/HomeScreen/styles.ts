import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {},

  cardsInfoView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  searchContainer: {
    width: "45%",
    marginTop: 20,
  },
  textSearchStyleContainer: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
  },
  textSearchStyle: {
    color: THEME.COLORS.BACKGROUND_900,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.MD,
  },
});
