import * as types from '../types'
import { createAction } from 'redux-actions'

export const fetchTransactionsSuc = createAction(types.FETCH_TRANSACTIONS_SUC)
export const fetchTransactionsErr = createAction(types.FETCH_TRANSACTIONS_ERR)
export const fetchTransactionsMoreSuc = createAction(types.FETCH_TRANSACTIONS_MORE_SUC)
export const fetchTransactionsMoreErr = createAction(types.FETCH_TRANSACTIONS_MORE_ERR)
export const initTransactions = createAction(types.INIT_TRANSACTIONS)
