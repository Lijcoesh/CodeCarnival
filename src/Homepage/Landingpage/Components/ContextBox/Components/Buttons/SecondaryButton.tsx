import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SecondaryButton = styled(Button)({
  backgroundColor: "#FF1493",
  color: "#FFFFFF",
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: "16px",
  fontWeight: 800,
  textTransform: "uppercase",
  padding: "16px 32px",
  border: "4px solid #000000",
  borderRadius: 0,
  boxShadow: "6px 6px 0px #000000",
  transition: "all 0.1s steps(2)",
  marginLeft: "16px",
  "&:hover": {
    backgroundColor: "#E91E8C",
    transform: "translate(2px, 2px)",
    boxShadow: "4px 4px 0px #000000",
  },
  "&:active": {
    transform: "translate(4px, 4px)",
    boxShadow: "2px 2px 0px #000000",
  },
  "@media (max-width: 768px)": {
    fontSize: "12px",
    padding: "12px 24px",
    marginLeft: 0,
    marginTop: "16px",
  },
});
