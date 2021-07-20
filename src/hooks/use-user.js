import { Hub } from "aws-amplify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../services/user-service";
import { storeUser } from "../store/actions/user-actions";

const useUser = () => {
  const dispatch = useDispatch();

  const setUserHandler = (userData) => {
    let userInfo = null;

    if (userData) {
      userInfo = {
        ...userData.attributes,
      }
    }

    dispatch(storeUser(userInfo));
  }

  const getUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      return currentUser;
    } catch(error) {
      console.log('get User: ', error);
    }
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUserHandler(userData));
          break;
        case 'signOut':
          setUserHandler(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
        default:
          break;
      }
    });

    getUser().then(userData => setUserHandler(userData));

  }, []);

}

export default useUser;