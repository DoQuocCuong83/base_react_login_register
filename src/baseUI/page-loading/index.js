import React from "react";
import logo from "./logo.png";
import { PageLoadingContainer } from "./style";

const PageLoading = () => {
  return (
    <PageLoadingContainer>
      <img src={logo} alt="logo"></img>
    </PageLoadingContainer>
  );
};

export default PageLoading;
