import { API, Auth } from "aws-amplify";
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

export const createCashFlow = (data) => {
  return API.graphql({ query: mutations.createCashFlow, variables: { input: data } });
}

export const getCashHistoryByUser = (userID) => {
  return API.graphql({ query: queries.listCashFlows, variables: { userID }});
}