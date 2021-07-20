import { mapSignInInfo2UserModel } from "../../components/utils/user-utils";
import { createUser, getUserByEmail } from "../../services/user-service";
import userSlice from "../user-slice";

export const storeUser = (userInfo) => {
  return async (dispatch) => {
    let userData = null;

    if(!userInfo) {
      dispatch(userActions.setUser(userData));
      return;
    }

    try {
      userData = await getUserByEmail(userInfo.email);
      
      if(!userData) {
        const toCreateUser = mapSignInInfo2UserModel(userInfo);
        userData = await createUser(toCreateUser);
      } 

      dispatch(userActions.setUser(userData));
    } catch(e) {
      console.log('store error: ', e);
    }
  }
}

export const userActions = userSlice.actions;