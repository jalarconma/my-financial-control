import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum FlowType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE"
}



type CashFlowMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CashFlow {
  readonly id: string;
  readonly description: string;
  readonly value: number;
  readonly type: FlowType | keyof typeof FlowType;
  readonly date: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CashFlow, CashFlowMetaData>);
  static copyOf(source: CashFlow, mutator: (draft: MutableModel<CashFlow, CashFlowMetaData>) => MutableModel<CashFlow, CashFlowMetaData> | void): CashFlow;
}

export declare class User {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly CashFlows?: (CashFlow | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}