import { createContext, useReducer } from "react";
import { ChildrenProps } from "../../@types/children-props";
import { ApplicationState, ITransaction } from "../../@types/transaction";
import { ActionType } from "./action-types";
import TransactionReducer from "./TransactionReducer";

const arrayTransaction: ITransaction[] = [];

const initialState = {
  transactions: arrayTransaction,
  loading: true,
};

export const TransactionContext = createContext<ApplicationState>(initialState);

export const TransactionContextProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  function deleteTransaction(id: string) {
    dispatch({
      type: ActionType.DELETE,
      payload: id,
    });
  }

  function addTransaction(transaction: ITransaction) {
    dispatch({
      type: ActionType.ADD,
      payload: transaction,
    });
  }

  //   async function getTransactions() {
  //     try {
  //       const response = await api.get("");
  //       dispatch({
  //         type: "GET_TRANSACTIONS",
  //         payload: response.data.data,
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: "TRANSACTION_ERROR",
  //         payload: error.response.data.error,
  //       });
  //     }
  //   }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
