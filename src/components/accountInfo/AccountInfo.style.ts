import { SxProps } from "@mui/material";
const styleAccountInfo: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "100vh",
  ".styleFormAccountInfo": {
    padding: "0 64px 0 32px",
    ".styleTextFiledGridsAccountInfo": {
      display: "flex",
      gap: "10rem",
    },
    ".inputNotRounded": {
      ".MuiOutlinedInput-root": {
        borderRadius: "10px 0  0 10px",
      },
    },
    ".styleUploadTextFiledGridAccountInfo": {
      display: "flex",
      ".styleUploadPictureAccountInfo": {
        borderRadius: "0 10px 10px 0",
        margin: "1px 40px 0.5px -5px",
      },
    },
    ".styleButtonGrid": {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "2rem",
      ".styleButtonAccountInfo": {
        width: "300px",
      },
    },
  },
};

export default styleAccountInfo;
