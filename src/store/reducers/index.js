import { combineReducers } from 'redux'
import matches from './matches'
import bets from './bets'
import quests from './quests'
import transactions from './transactions'
import home from './home'
import invitations from './invitations'
import charge from './charge'
import user from './user'
import champion from './champion'
import match from './match'
import mall from './mall'
import goodsDetail from './goodsDetail'
import orders from './orders'
import formId from './formId'
import betDetail from './betDetail'
import orderDetail from './orderDetail'
import rank from './rank'

export default combineReducers({
  matches,
  bets,
  quests,
  transactions,
  home,
  invitations,
  charge,
  user,
  champion,
  match,
  mall,
  goodsDetail,
  orders,
  formId,
  betDetail,
  orderDetail,
  rank
})
