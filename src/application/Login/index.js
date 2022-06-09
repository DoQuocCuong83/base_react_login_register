import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import FormLogin from "./form-login";
import FormRegister from "./form-register";

const Login = () => {
  const [isShowFormLogin, setIsShowFormLogin] = useState(true);

  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <div className="h-screen relative">
        {isShowFormLogin === true ? (
          <FormLogin handleChangeForm={() => setIsShowFormLogin(false)} />
        ) : (
          <FormRegister handleChangeForm={() => setIsShowFormLogin(true)} />
        )}
      </div>
    </>
  );
};

export default Login;
