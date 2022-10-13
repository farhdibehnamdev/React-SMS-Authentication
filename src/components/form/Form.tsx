import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import formStyle from "./Form.style";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { FormProps } from "./FormProps";
import ContentHolder from "./ContentHolder";
const Form = function ({
  otpText,
  forgetPasswordText,
  refactorPhoneNumber,
  inputLabel,
  isLoginForm,
}: FormProps) {
  return (
    <form>
      <Box sx={formStyle(isLoginForm)}>
        <Box className="boxFormContent">
          <Grid item xs className="gridPhoneNumber">
            <Typography className="typographyPhoneNumber">
              {inputLabel}
            </Typography>
          </Grid>
          <Grid item xs className="gridTextFieldPhoneNumber">
            <TextField
              className="textFieldPhoneNumber"
              placeholder="09121234567"
              fullWidth
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HighlightOffIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item xs className="gridContentHolder">
            <ContentHolder
              otpText={otpText}
              refactorPhoneNumber={refactorPhoneNumber}
              forgetPasswordText={forgetPasswordText}
            />
          </Grid>
          <Grid item className="gridButton" xs>
            <Button type="submit" variant="outlined" fullWidth>
              ورود به ویرا
            </Button>
          </Grid>
        </Box>
      </Box>
    </form>
  );
};

export default Form;
