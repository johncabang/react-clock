import React from "react";
import { CircularProgress } from "@material-ui/core";
import { StyledLoading } from "./LoadingElements";

const Loading = () => {
  return (
    <StyledLoading>
      <CircularProgress />
    </StyledLoading>
  );
};

export default Loading;
