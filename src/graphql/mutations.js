/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCashFlow = /* GraphQL */ `
  mutation CreateCashFlow(
    $input: CreateCashFlowInput!
    $condition: ModelCashFlowConditionInput
  ) {
    createCashFlow(input: $input, condition: $condition) {
      id
      description
      value
      type
      date
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCashFlow = /* GraphQL */ `
  mutation UpdateCashFlow(
    $input: UpdateCashFlowInput!
    $condition: ModelCashFlowConditionInput
  ) {
    updateCashFlow(input: $input, condition: $condition) {
      id
      description
      value
      type
      date
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCashFlow = /* GraphQL */ `
  mutation DeleteCashFlow(
    $input: DeleteCashFlowInput!
    $condition: ModelCashFlowConditionInput
  ) {
    deleteCashFlow(input: $input, condition: $condition) {
      id
      description
      value
      type
      date
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CashFlows {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CashFlows {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CashFlows {
        nextToken
        startedAt
      }
    }
  }
`;
