import { Stack } from "@mui/material";
import { ChevronLeft } from "../../Components/Chevron/ChevronLeft";
import { ChevronRight } from "../../Components/Chevron/ChevronRight";
import { LogoText } from "../../Components/Text/LogoText";
import ContextBox from "../../Components/ContextBox/ContextBox";

export default function Landingpage() {
  return (
    <>
      <Stack
        sx={{ minHeight: "100vh", backgroundColor: "#FFE03D" }}
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
