import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const FeatureTitle = styled(Typography)({
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: "20px",
  fontWeight: 800,
  color: "#8B2BE2",
  textTransform: "uppercase",
  marginBottom: "16px",
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
});
