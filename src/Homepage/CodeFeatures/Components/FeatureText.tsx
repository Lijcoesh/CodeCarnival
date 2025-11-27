import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const FeatureText = styled(Typography)({
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: 1.5,
  color: "#1E0066",
  "@media (max-width: 768px)": {
    fontSize: "14px",
  },
});
