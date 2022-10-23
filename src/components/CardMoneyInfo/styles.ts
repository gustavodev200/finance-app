import { StyleSheet } from "react-native";
import { THEME } from "../../themes";
import { defaultCardStyle } from "./defaultStyles";

export const styles = (typeCard: any) =>
  StyleSheet.create({
    container: {
      ...defaultCardStyle,
      backgroundColor: typeCard,
    },
  });

export const stylesContent = StyleSheet.create({
  textStatusCard: {
    color: THEME.COLORS.TEXT,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.LG,
  },
  contentMoneyInfo: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  moneyInsights: {
    flexDirection: "row",
  },

  moneyInsightsText: {
    color: THEME.COLORS.TEXT,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.MD,
    marginRight: 5,
  },
});
