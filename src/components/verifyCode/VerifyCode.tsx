import React from "react";
import { Grid } from "@mui/material";
import Card from "components/card/Card";
import boxStyle from "components/common/componentStyles";
import Form from "components/form/Form";
const VerifyCode = function () {
  return (
    <Grid item sx={boxStyle}>
      <Card cardSize="672px" title="کد تایید را وارد نمایید">
        <Form
          inputLabel="کد تایید برای شماره موبایل 09121234567 ارسال گردید"
          otpText={null}
          forgetPasswordText={null}
          isLoginForm={false}
          refactorPhoneNumber="اصلاح شماره موبایل"
        />
      </Card>
    </Grid>
  );
};

export default VerifyCode;
