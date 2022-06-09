import React, { useEffect, useState } from "react";
import { Button } from "../../../baseUI/button";
import { Input } from "../../../baseUI/input";
import { FormCenter } from "../../../baseUI/form-center";
import { login, register } from "../store/async-thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusRegister, selectStatusLogin } from "../store/slice";

const FormRegister = props => {
  const { handleChangeForm } = props;

  const [isEmailErr, setIsEmailErr] = useState(false);
  const [isPwErr, setIsPwErr] = useState(false);
  const [isConfirmPwErr, setIsConfirmPwErr] = useState(false);
  const [isFullNameErr, setIsFullNameErr] = useState(false);

  const [inforRegister, setInforRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: ""
  });

  const dispatch = useDispatch();

  const statusRegister = useSelector(selectStatusRegister);
  const statusLogin = useSelector(selectStatusLogin);

  useEffect(() => {
    if (statusRegister === "success") {
      dispatch(
        login({
          endpoint: "/login",
          account: {
            email: inforRegister.email,
            password: inforRegister.password
          }
        })
      );
    }
  }, [statusRegister, handleChangeForm, dispatch]);

  useEffect(() => {
    if (statusLogin === "Success") {
      window.location.href = "/";
    }
  }, [statusLogin]);

  const handleChangeInforRegister = e => {
    setInforRegister({ ...inforRegister, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = () => {
    setIsEmailErr(false);
    setIsPwErr(false);
    setIsConfirmPwErr(false);
    setIsFullNameErr(false);
    if (
      inforRegister.email.length === 0 ||
      !inforRegister.email.match(
        /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      ) ||
      inforRegister.email.includes("<script>")
    )
      setIsEmailErr(true);
    else if (
      inforRegister.password.length === 0 ||
      inforRegister.password.includes("<script>")
    )
      setIsPwErr(true);
    else if (
      inforRegister.confirmPassword.length === 0 ||
      inforRegister.confirmPassword.includes("<script>") ||
      inforRegister.confirmPassword !== inforRegister.password
    )
      setIsConfirmPwErr(true);
    else if (
      inforRegister.fullName.length === 0 ||
      inforRegister.fullName.includes("<script>")
    )
      setIsFullNameErr(true);
    else {
      dispatch(
        register({
          endpoint: "/register",
          account: inforRegister
        })
      );
    }
  };

  return (
    <FormCenter className="absolute border rounded px-5 py-8 mt-8 shadow-md bg-white">
      <h1 className="text-center text-3xl text-gray-700 font-semibold font-sans">
        Register
      </h1>
      <div className="mt-4">
        <label className="">Email:</label>
        {isEmailErr && (
          <span className="ml-4 text-red-500">Email không đúng</span>
        )}
        <Input
          onChange={handleChangeInforRegister}
          name="email"
          className="mt-3 px-1 py-2 w-full focus:shadow-md"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mt-4">
        <label className="">Password:</label>
        {isPwErr && (
          <span className="ml-4 text-red-500">Password không đúng</span>
        )}
        <Input
          onChange={handleChangeInforRegister}
          name="password"
          className="mt-3 px-1 py-2 w-full focus:shadow-md"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mt-4">
        <label className="">Comfirm Password:</label>
        {isConfirmPwErr && (
          <span className="ml-4 text-red-500">Confirm password không đúng</span>
        )}
        <Input
          onChange={handleChangeInforRegister}
          name="confirmPassword"
          className="mt-3 px-1 py-2 w-full focus:shadow-md"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mt-4">
        <label className="">Full Name:</label>
        {isFullNameErr && (
          <span className="ml-4 text-red-500">Fullname không đúng</span>
        )}
        <Input
          onChange={handleChangeInforRegister}
          name="fullName"
          className="mt-3 px-1 py-2 w-full focus:shadow-md "
          type="email"
          placeholder="Full Name"
        />
      </div>
      <div className="mt-8 flex justify-between items-center">
        <Button
          onClick={handleSubmitRegister}
          className="bg-green-500 hover:bg-white text-white font-semibold hover:text-green-500 border border-green-500"
        >
          Register
        </Button>
        <Button
          className="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 "
          onClick={handleChangeForm}
        >
          Login
        </Button>
      </div>
      <div>
        <b className="text-red-500">{statusRegister}</b>
      </div>
    </FormCenter>
  );
};

export default FormRegister;
