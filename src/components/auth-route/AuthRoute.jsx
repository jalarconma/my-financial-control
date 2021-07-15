import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ROUTE_TYPE } from '../../app-routes/route-type';
import { APP_ROUTES } from "../../app-routes/routes";

const AuthRoute = (props) => {
  const isAuthUser = useSelector(state => state.user.value ? true : false);

  const { type, children } = props;

  if (type === ROUTE_TYPE.PUBLIC && isAuthUser) return <Redirect to={APP_ROUTES.HOME} />;

  else if (type === ROUTE_TYPE.PRIVATE && !isAuthUser) return <Redirect to={APP_ROUTES.ROOT} />;

  return <Route {...props}>{children}</Route>;
};

export default AuthRoute;