export const mapSignInInfo2UserModel = (userInfo) => {
  return {
    email: userInfo.email,
    firstName: userInfo.name.split(" ")[0],
    lastName: userInfo.family_name
  };
};