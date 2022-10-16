const formStyle = function (isLoginForm: boolean) {
  return {
    ".gridTitle": {
      margin: "32px 0 16px 0",
      paddingRight: "31px",

      ".typographyTitle": {
        marginBottom: "60px",
        textAlign: "right",
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    ".boxFormContent": {
      padding: "0 64px 0 64px",

      ".gridPhoneNumber": {
        marginBottom: "20px",

        ".typographyPhoneNumber": {
          color: "#33475B",
          font: "600 56px",
        },
      },
      ".gridTextFieldPhoneNumber": {
        marginBottom: isLoginForm ? "100px" : "48px",

        ".textFieldPhoneNumber": {
          input: {
            textAlign: "right",
          },
        },
      },
    },
    ".gridContentHolder": {
      marginBottom: !isLoginForm ? "100px" : "0px",
      ".textLink": {
        color: "#1F78B4",
      },
    },
    ".gridButton": {
      marginBottom: "96px",
      Button: {
        padding: "10px 0",
      },
    },
  };
};

export default formStyle;
