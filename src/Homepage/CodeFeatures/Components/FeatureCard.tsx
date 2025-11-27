import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FeatureCard = styled(Box)({
  border: "4px solid #000000",
  outline: "8px solid #FF1493",
  outlineOffset: "-4px",
  backgroundColor: "#FFE03D",
  padding: "32px",
  marginBottom: "24px",
  boxShadow: "6px 6px 0px #000000",
  "@media (max-width: 768px)": {
    padding: "24px",
    marginBottom: "16px",
  },
});
