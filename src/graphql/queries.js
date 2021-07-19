/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCashFlow = /* GraphQL */ `
  query GetCashFlow($id: ID!) {
    getCashFlow(id: $id) {
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
export const listCashFlows = /* GraphQL */ `
  query ListCashFlows(
    $filter: ModelCashFlowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCashFlows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCashFlows = /* GraphQL */ `
  query SyncCashFlows(
    $filter: ModelCashFlowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCashFlows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
