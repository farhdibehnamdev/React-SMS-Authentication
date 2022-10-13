import React from "react";
import Card from "components/card/Card";
import Form from "components/form/Form";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import boxStyle from "./SignIn.style";

const SignIn = function () {
  return (
    <Box sx={boxStyle}>
      <Grid container>
        <Card title="ورود | ثبت نام">
          <Form
            inputLabel="شماره موبایل خود را وارد کنید"
            otpText={null}
            forgetPasswordText={null}
            isLoginForm={true}
            refactorPhoneNumber={null}
          />
        </Card>
      </Grid>
    </Box>
  );
};

export default SignIn;
