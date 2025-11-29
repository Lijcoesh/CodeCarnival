import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const BodyText = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: 1.6,
  color: "#1E0066",
  marginBottom: "24px",
  textAlign: "center",
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
});
