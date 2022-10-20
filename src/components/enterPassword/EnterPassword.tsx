import React from "react";
import { Grid } from "@mui/material";
import Card from "components/card/Card";
import boxStyle from "components/common/componentStyles";
import Form from "components/form/Form";
const EnterPassword = function () {
  return (
    <Grid item sx={boxStyle}>
      <Card cardSize="672px" title="رمز عبور خود را وارد کنید">
        <Form
          inputLabel="رمز عبور حساب کاربری خود را وارد کنید"
          otpText="ورود با رمز یک بار مصرف"
          forgetPasswordText="فراموشی رمز عبور"
          refactorPhoneNumber={null}
          isLoginForm={false}
        />
      </Card>
    </Grid>
  );
};

export default EnterPassword;
