import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LogoText = styled(Typography)({
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: "72px",
  fontWeight: 900,
  color: "#8B2BE2",
  textTransform: "uppercase",
  letterSpacing: "4px",
  textShadow: "6px 6px 0px #000000",
  marginBottom: "32px",
  textAlign: "center",
  "@media (max-width: 768px)": {
    fontSize: "36px",
    letterSpacing: "2px",
    textShadow: "3px 3px 0px #000000",
  },
});
