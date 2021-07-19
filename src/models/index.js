// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FlowType = {
  "INCOME": "INCOME",
  "EXPENSE": "EXPENSE"
};

const { CashFlow, User } = initSchema(schema);

export {
  CashFlow,
  User,
  FlowType
};