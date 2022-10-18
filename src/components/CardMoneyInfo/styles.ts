import { StyleSheet } from "react-native";
import { THEME } from "../../themes";
import { DefaultCardStyle } from "./DefaultStyle";

export const styles = StyleSheet.create({
  containerRed: {
    ...DefaultCardStyle,
    backgroundColor: THEME.COLORS.ALERT,
  },
  containerGreen: {
    ...DefaultCardStyle,
    backgroundColor: THEME.COLORS.SUCCESS,
  },
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
