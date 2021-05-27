import React from "react";
import { CircularProgress } from "@material-ui/core";
import { StyledLoading } from "./LoadingElements";
import { Content } from "../pages/ContentElements";

const Loading = () => {
  return (
    <Content>
      <StyledLoading>
        <CircularProgress />
      </StyledLoading>
    </Content>
  );
};

export default Loading;
