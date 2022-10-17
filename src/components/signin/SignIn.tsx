import React from "react";
import Card from "components/card/Card";
import Form from "components/form/Form";
import { Grid } from "@mui/material";
import boxStyle from "components/common/componentStyles";

const SignIn = function () {
  return (
    <Grid item sx={boxStyle}>
      <Card cardSize="672px" title="ورود | ثبت نام">
        <Form
          inputLabel="شماره موبایل خود را وارد کنید"
          otpText={null}
          forgetPasswordText={null}
          isLoginForm={true}
          refactorPhoneNumber={null}
        />
      </Card>
    </Grid>
  );
};

export default SignIn;
