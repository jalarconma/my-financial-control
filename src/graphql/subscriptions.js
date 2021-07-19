/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCashFlow = /* GraphQL */ `
  subscription OnCreateCashFlow {
    onCreateCashFlow {
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
export const onUpdateCashFlow = /* GraphQL */ `
  subscription OnUpdateCashFlow {
    onUpdateCashFlow {
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
export const onDeleteCashFlow = /* GraphQL */ `
  subscription OnDeleteCashFlow {
    onDeleteCashFlow {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
