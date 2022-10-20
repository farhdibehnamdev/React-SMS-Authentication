import React from "react";
import { Grid } from "@mui/material";
import boxStyle from "components/common/componentStyles";
import Card from "components/card/Card";
import Form from "components/form/Form";
const RefactorPhoneNumber = function () {
  return (
    <Grid item sx={boxStyle}>
      <Card cardSize="672px" title="اصلاح شماره موبایل">
        <Form
          inputLabel="شماره موبایل خود را وارد نمایید"
          otpText={null}
          forgetPasswordText={null}
          isLoginForm={false}
          refactorPhoneNumber={null}
        />
      </Card>
    </Grid>
  );
};

export default RefactorPhoneNumber;
