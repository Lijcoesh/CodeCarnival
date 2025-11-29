import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChevronLeft = styled(Stack)({
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  borderTop: "200px solid transparent",
  borderBottom: "200px solid transparent",
  borderLeft: "100px solid white",
  opacity: 0.3,
});
