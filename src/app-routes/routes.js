export const APP_ROUTES = {
  ROOT: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  SIGNOUT: '/signout',
  HOME: '/home',
  MY_ACCOUNT: '/my-account',
  EXPENSES: '/expenses'
}

export const AUTH_NAV_LINKS = [
  { route: APP_ROUTES.EXPENSES, title: 'Expenses'},
  { route: APP_ROUTES.SIGNOUT, title: 'Sign Out'}
];

export const GUESS_NAV_LINKS = [
  {route: APP_ROUTES.SIGNIN, title: 'Sign In'}, 
  {route: APP_ROUTES.SIGNUP, title: 'Sign up'}
];