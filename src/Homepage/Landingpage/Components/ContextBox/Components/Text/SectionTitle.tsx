import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionTitle = styled(Typography)({
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: "32px",
  fontWeight: 800,
  color: "#FFFFFF",
  backgroundColor: "#8B2BE2",
  textTransform: "uppercase",
  padding: "16px 32px",
  textAlign: "center",
  border: "4px solid #000000",
  boxShadow: "4px 4px 0px #000000",
  marginBottom: "32px",
  "@media (max-width: 768px)": {
    fontSize: "20px",
    padding: "12px 16px",
  },
});
