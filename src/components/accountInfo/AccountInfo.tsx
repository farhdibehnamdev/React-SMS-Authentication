import React from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import Card from "components/card/Card";
import styleAccountInfo from "components/accountInfo/AccountInfo.style";
const AccountInfo = function () {
  return (
    <Grid item sx={styleAccountInfo}>
      <Card cardSize="1134px" title="اطلاعات حساب">
        <form className="styleFormAccountInfo">
          <Grid container spacing={10}>
            <Grid item xs={12} className="styleTextFiledGridsAccountInfo">
              <TextField
                name="firstName"
                type="text"
                label="نام"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="نام خود را وارد کنید"
              />
              <TextField
                name="lastName"
                type="text"
                InputLabelProps={{ shrink: true }}
                label="نام خانوادگی"
                placeholder="نام خانوادگی خود را وارد کنید"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} className="styleTextFiledGridsAccountInfo">
              <TextField
                name="password"
                type="password"
                label="رمز عبور"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="رمز عبور خود را وارد کنید"
              />
              <TextField
                name="confirmPassword"
                type="password"
                label="تکرار رمز عبور"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="رمز عبور خود را وارد کنید"
              />
            </Grid>

            <Grid item xs={6} className="styleUploadTextFiledGridAccountInfo">
              <TextField
                name="uploadImage"
                label="آپلود تصویر"
                fullWidth
                InputLabelProps={{ shrink: true }}
                placeholder="تصویر خود را آپلود کنید"
                className="inputNotRounded"
              />
              <Button
                type="submit"
                variant="outlined"
                className="styleUploadPictureAccountInfo"
              >
                <Typography style={{ fontSize: "12px", width: "100px" }}>
                  آپلود تصویر
                </Typography>
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>

            <Grid item xs={12} className="styleButtonGrid">
              <Button
                type="submit"
                variant="outlined"
                className="styleButtonAccountInfo"
              >
                ذخیره اطلاعات
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Grid>
  );
};

export default AccountInfo;
