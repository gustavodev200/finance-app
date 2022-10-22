import { ApplicationState } from "../../@types/transaction";
import { ActionType } from "./action-types";
import { Action } from "./actions";

function TransactionReducer(state: ApplicationState, action: Action) {
  switch (action.type) {
    case ActionType.DELETE: {
      const removedTransaction = state.transactions.find(
        (transaction) => transaction.id === action.payload
      );
      state.transactions.splice(
        state.transactions.indexOf(removedTransaction!),
        1
      );

      return {
        ...state,
        transactions: [...state.transactions],
      };
    }

    case ActionType.ADD: {
      state.transactions.unshift(action.payload);

      return {
        ...state,
        transaction: [...state.transactions],
      };
    }

    // case ActionType.GET: {
    //   return {
    //     ...state,
    //     loading: false,
    //     transaction: action.payload,
    //   };
    // }

    // case ActionType.ERROR: {
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    // }

    default:
      return state;
  }
}

export default TransactionReducer;
