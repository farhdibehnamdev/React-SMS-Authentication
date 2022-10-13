import React from "react";
import { Typography } from "@mui/material";
import { ContentHolderProps } from "./FormProps";

const ContentHolder = function ({
  otpText,
  forgetPasswordText,
  refactorPhoneNumber,
}: ContentHolderProps): JSX.Element {
  if (refactorPhoneNumber)
    return (
      <Typography className="gridPhoneNumber textLink">
        {refactorPhoneNumber}
      </Typography>
    );
  else {
    return (
      <>
        <Typography className="gridPhoneNumber textLink">{otpText}</Typography>
        <Typography className="gridPhoneNumber textLink">
          {forgetPasswordText}
        </Typography>
      </>
    );
  }
};

export default ContentHolder;
