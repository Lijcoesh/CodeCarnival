import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChevronRight = styled(Stack)({
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  borderTop: "200px solid transparent",
  borderBottom: "200px solid transparent",
  borderRight: "100px solid white",
  opacity: 0.3,
});
