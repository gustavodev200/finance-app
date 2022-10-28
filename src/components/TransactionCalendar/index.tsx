import React, { useState } from "react";
import { View } from "react-native";

import { styles } from "./styles";

export function TransactionCalendar() {
  const [date, setDate] = useState(new Date());
  return <View style={styles.container}></View>;
}

// import React from "react";
// import { View } from "react-native";

// import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// import { LocaleConfig } from "react-native-calendars";

// import { MaterialIcons } from "@expo/vector-icons";

// // import { styles } from "./styles";

// LocaleConfig.locales["pt-br"] = {
//   monthNames: [
//     "Janeiro",
//     "Fevereiro",
//     "Março",
//     "Abril",
//     "Maio",
//     "Junho",
//     "Julho",
//     "Agosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro",
//   ],
//   monthNamesShort: [
//     "Jan.",
//     "Fev.",
//     "Mar.",
//     "Abr.",
//     "Mai.",
//     "Jun.",
//     "Jul.",
//     "Ago",
//     "Set.",
//     "Out.",
//     "Nov.",
//     "Dez.",
//   ],
//   dayNames: [
//     "Domingo",
//     "Segunda",
//     "Terça",
//     "Quarta",
//     "Quinta",
//     "Sexta",
//     "Sábado",
//   ],
//   dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
//   today: "Hoje",
// };
// LocaleConfig.defaultLocale = "pt-br";

// export function TransactionCalendar() {
//   const date = new Date();
//   const formatMap = {
//     mm: date.getMonth() + 1,
//     dd: date.getDate() - 1,
//     aa: date.getFullYear().toString().slice(-2),
//     aaaa: date.getFullYear(),
//   };

//   console.log(formatMap);
//   return (
//     <Calendar
//       // Mês inicialmente visível. Default = now
//       initialDate={`${formatMap.aaaa}-${formatMap.mm}-${formatMap.dd}`}
//       // Data mínima que pode ser selecionada, datas antes de minDate ficarão acinzentadas. Default = undefined
//       minDate={"2012-05-10"}
//       // Data máxima que pode ser selecionada, datas após maxDate ficarão acinzentadas. Default = undefined
//       maxDate={"2030-05-30"}
//       // Manipulador que é executado na imprensa do dia. Padrão = indefinido
//       onDayPress={(dia) => {
//         console.log("dia selecionado", dia);
//       }}
//       // Manipulador que é executado ao pressionar o dia inteiro. Padrão = indefinido
//       onDayLongPress={(dia) => {
//         console.log("dia selecionado", dia);
//       }}
//       // Formato do mês no título do calendário. Valores de formatação: http://arshaw.com/xdate/#Formatting
//       monthFormat={"MM/yyyy"}
//       // Manipulador que é executado quando o mês visível muda no calendário. Padrão = indefinido
//       onMonthChange={(mês) => {
//         console.log("mês alterado", mês);
//       }}
//       // Oculta as setas de navegação do mês. Default = false
//       hideArrows={false}
//       // Substitua as setas padrão por personalizadas (a direção pode ser 'esquerda' ou 'direita')
//       renderArrow={(direction) => (
//         <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
//       )}
//       // Não mostra dias de outros meses no mês página. Default = false
//       hideExtraDays={false}
//       // Se hideArrows = false e hideExtraDays = false não mude o mês ao tocar em cinza
//       // dia de outro mês visível na página do calendário. Default = false
//       disableMonthChange={true}
//       // Se firstDay=1 semana começa na segunda-feira. Observe que dayNames e dayNamesShort ainda devem começar a partir de domingo
//       firstDay={1}
//       // Ocultar nomes de dias. Default = false
//       hideDayNames={true}
//       // Mostra os números das semanas à esquerda. Default = false
//       showWeekNumbers={true}
//       // Manipulador que é executado ao pressionar o ícone de seta para a esquerda. Ele recebe um retorno de chamada pode voltar mês
//       onPressArrowLeft={(subtrairMonth) => subtrairMonth()}
//       // Manipulador que é executado ao pressionar o ícone de seta para a direita. Ele recebe um retorno de chamada pode ir no próximo mês
//       onPressArrowRight={(addMonth) => addMonth()}
//       // Desativa a seta para a esquerda. Default = false
//       disableArrowLeft={false}
//       // Desativa a seta para a direita. Default = false
//       disableArrowRight={false}
//       // Desabilita todos os eventos de toque para dias desabilitados. pode ser substituído com disableTouchEvent em selectedDates
//       disableAllTouchEventsForDisabledDays={false}
//       // Substitua o título padrão de mês e ano por um personalizado. a função recebe uma data como parâmetro
//       // renderHeader={(date) => {
//       //   /*Return JSX*/
//       // }}
//       // Habilita a opção de passar entre meses. Padrão = false
//       enableSwipeMonths={true}
//       markDates={{
//         "2022-10-16": { selected: true, selectedColor: "blue" },
//         "2022-10-17": { selected: true },
//         " 2022-10 -18": { marcado: true, dotColor: "red", activeOpacity: 0 },

//         "2022-10-19": { disabled: true, disableTouchEvent: true },
//       }}
//     />
//   );
// }
