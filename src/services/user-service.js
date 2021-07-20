import { API, Auth } from "aws-amplify";
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

export const getUserByEmail = async (email) => {
  const prevUserResponse = await API.graphql({ query: queries.listUsers, variables: { email } });
  const [prevUser] = prevUserResponse.data.listUsers.items;
  return prevUser
}

export const createUser = (newUser) => {
  return API.graphql({ query: mutations.createUser, variables: { input: newUser } });
}

export const getCurrentUser = () => {
  return Auth.currentAuthenticatedUser();
}

export const signUp = (userData) => {
  const { email, password, firstName, lastName } = userData;
  Auth.signUp({
    username: email,
    password,
    attributes: {
      name: `${firstName} ${lastName}`,
      email,
      family_name: lastName
    }
  });
}

export const signIn = (userData) => {
  const { email, password} = userData;
  Auth.signIn({
    username: email,
    password
  });
}