import { Stack, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "./Components/Chevron";
import { LogoText } from "./Components/ContextBox/Components/Text/LogoText";
import ContextBox from "./Components/ContextBox/ContextBox";

export default function Landingpage() {
  return (
    <>
      <Stack
        sx={{ minHeight: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <ChevronLeft />
        <ChevronRight />
        <LogoText>CODECARNIVAL</LogoText>
        <ContextBox />
      </Stack>
    </>
  );
}
