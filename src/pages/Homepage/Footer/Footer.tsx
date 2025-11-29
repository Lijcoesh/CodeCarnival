import { Box, Container, Typography } from "@mui/material";
import { BodyText } from "../Landingpage/Components/ContextBox/Components/Text/BodyText";
import { PixelButton } from "../../../Components/Buttons/PixelButton";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FF1493",
          padding: "64px 24px",
          textAlign: "center",
          borderTop: "8px solid #000000",
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
              fontSize: { xs: "24px", md: "36px" },
              fontWeight: 900,
              color: "#FFE03D",
              textShadow: "4px 4px 0px #000000",
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            READY TO GET WEIRD?
          </Typography>
          <BodyText sx={{ color: "#FFFFFF", marginBottom: "32px" }}>
            Join developers and designers who aren't afraid to break the rules,
            challenge conventions, and create something wonderfully terrible.
          </BodyText>
          <PixelButton sx={{ backgroundColor: "#FFE03D", color: "#8B2BE2" }}>
            START YOUR JOURNEY
          </PixelButton>
        </Container>
      </Box>
    </>
  );
}
