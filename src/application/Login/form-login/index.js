import React, { useEffect, useState } from "react";
import { Button } from "../../../baseUI/button";
import { Input } from "../../../baseUI/input";
import { FormCenter } from "../../../baseUI/form-center";
import { login } from "../store/async-thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusLogin } from "../store/slice";

const FormLogin = props => {
  const { handleChangeForm } = props;

  const [inforLogin, setInforLogin] = useState({
    email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
    password: localStorage.getItem("password")
      ? localStorage.getItem("password")
      : ""
  });
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const dispatch = useDispatch();

  const statusLogin = useSelector(selectStatusLogin);

  useEffect(() => {
    if (statusLogin === "Success") {
      if (inforLogin.remember === true) {
        localStorage.setItem("email", inforLogin.email);
        localStorage.setItem("password", inforLogin.password);
      }
      window.location.href = "/";
    }
  }, [statusLogin]);

  const handleChangeInforLogin = e => {
    if (e.target.name !== "remember")
      setInforLogin({ ...inforLogin, [e.target.name]: e.target.value });
    else if (e.target.name === "remember" && inforLogin.remember === undefined)
      setInforLogin({ ...inforLogin, remember: true });
    else setInforLogin({ ...inforLogin, remember: !inforLogin.remember });
  };

  const handleSubmitLogin = () => {
    setIsEmailError(false);
    setIsPasswordError(false);
    if (
      inforLogin.email.length === 0 ||
      !inforLogin.email.match(
        /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      ) ||
      inforLogin.email.includes("<script>")
    )
      setIsEmailError(true);
    else if (
      inforLogin.password.length === 0 ||
      inforLogin.password.includes("<script>")
    )
      setIsPasswordError(true);
    else {
      dispatch(
        login({
          endpoint: "/login",
          account: {
            email: inforLogin.email,
            password: inforLogin.password
          }
        })
      );
    }
  };

  return (
    <FormCenter className="absolute border rounded px-5 py-8 shadow-md bg-white">
      <h1 className="text-center text-3xl text-gray-700 font-semibold font-sans">
        Login
      </h1>
      <div className="mt-4">
        <label className="">Email:</label>
        {isEmailError && (
          <span className="ml-5 text-red-500">Email chưa đúng</span>
        )}
        <Input
          onChange={handleChangeInforLogin}
          className="mt-3 px-1 py-2 w-full focus:shadow-md"
          type="email"
          placeholder="User Name"
          name="email"
          value={inforLogin.email}
        />
      </div>
      <div className="mt-4">
        <label className="">Password:</label>
        {isPasswordError && (
          <span className="ml-5 text-red-500">Password chưa đúng</span>
        )}
        <Input
          onChange={handleChangeInforLogin}
          className="mt-3 px-1 py-2 w-full focus:shadow-md"
          type="password"
          placeholder="Password"
          name="password"
          value={inforLogin.password}
        />
      </div>
      <div className="mt-4">
        <label className="inline-flex items-center mt-3">
          <input
            onChange={handleChangeInforLogin}
            type="checkbox"
            className="form-checkbox h-4 w-4 text-gray-600"
            name="remember"
          />
          <span className="ml-2 text-gray-700">Remember</span>
        </label>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Button
          onClick={handleSubmitLogin}
          className="bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-500 border border-blue-500 "
        >
          Login
        </Button>
        <Button
          className="hover:bg-green-500 text-green-700 font-semibold hover:text-white border border-green-500"
          onClick={handleChangeForm}
        >
          Register
        </Button>
      </div>
      <div>
        <b className="text-red-500">{statusLogin}</b>
      </div>
    </FormCenter>
  );
};

export default FormLogin;
