import React from "react";
import { Container, ThemeProvider, Grid, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import theme from "./styles/theme";
import SignIn from "components/signin/SignIn";
import ForgetPassword from "components/forgetPassword/ForgetPassword";
import PrivateRoute from "routes/privateRoute/PrivateRoute";
import VerifyCode from "components/verifyCode/VerifyCode";
import NotFound from "components/notFound/NotFound";
import AccountInfo from "components/accountInfo/AccountInfo";
import RefactorPhoneNumber from "components/refactorPhoneNumber/RefactorPhoneNumber";
import EnterPassword from "components/enterPassword/EnterPassword";
import styleGrid from "./App.style";
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <Container maxWidth={false}>
      <Grid container sx={styleGrid}>
        <CacheProvider value={cacheRTL}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route
                  path="/refactornumber"
                  element={<RefactorPhoneNumber />}
                />
                <Route path="/*" element={<PrivateRoute />}>
                  <Route path="profile" element={<AccountInfo />} />
                </Route>
                <Route path="/verifycode" element={<PrivateRoute />}>
                  <Route path="" element={<VerifyCode />} />
                </Route>
                <Route path="/enterpassword" element={<PrivateRoute />}>
                  <Route path="" element={<EnterPassword />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </CacheProvider>
      </Grid>
    </Container>
  );
}

export default App;
