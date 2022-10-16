import React from "react";
import { Grid } from "@mui/material";
import Card from "components/card/Card";
import boxStyle from "components/common/componentStyles";
import Form from "components/form/Form";

const ForgetPassword = function () {
  return (
    <Grid item sx={boxStyle}>
      <Card cardSize="672px" title="فراموشی رمز عبور">
        <Form
          inputLabel="شماره موبایل خود را وارد کنید"
          otpText={null}
          forgetPasswordText={null}
          refactorPhoneNumber={null}
          isLoginForm={false}
        />
      </Card>
    </Grid>
  );
};

export default ForgetPassword;
