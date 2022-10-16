export const cardStyle = function (cardSize: string) {
  return {
    ".muiCard": {
      width: cardSize,
      border: "1px solid #CECECE",
      margin: "0 auto",
      ".gridStyleCardHeader": {
        backgroundColor: "#F8F8F8",
        borderBottom: "1px solid #CECECE",
        ".styleCardHeader": {
          Width: "206px",
          height: "85px",
          margin: "auto auto 58px auto",
          padding: 0,
        },
      },
      ".gridStyleTitle": {
        margin: "32px 0 0 16px",
        paddingRight: "31px",

        ".typographyStyleTitle": {
          marginBottom: "60px",
          fontSize: "18px",
          fontWeight: "bold",
        },
      },
      ".styledCardContent": {
        backgroundColor: "#FFF",
      },
    },
  };
};
