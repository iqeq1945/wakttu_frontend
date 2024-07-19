import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { MainHeader } from "@/components";
import Auth from "@/containers/auth/Auth";
import { selectUserId } from "@/redux/user/userSlice";
import { selectModal } from "@/redux/modal/modalSlice";

import MainFormContainer from "@/containers/main/MainForm";
import { Container } from "@/styles/common/Layout";
import { Wrapper } from "@/styles/main/Layout";
import { client } from "@/services/api";

const Main = () => {
  const modal = useSelector(selectModal);
  return (
    <>
      {modal.open ? (
        <Auth />
      ) : (
        <Container>
          <MainHeader />
          <Wrapper>
            <MainFormContainer />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Main;
