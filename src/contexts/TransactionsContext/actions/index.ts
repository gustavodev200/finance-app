import { ITransaction } from "../../../@types/transaction";
import { ActionType } from "../action-types";

interface AddTransactionAction {
  type: ActionType.ADD;
  payload: ITransaction;
}

interface DeleteTransactionAction {
  type: ActionType.DELETE;
  payload: string;
}

export type Action = AddTransactionAction | DeleteTransactionAction;
