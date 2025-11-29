import { SectionTitle } from "../Text/SectionTitle";
import { BodyText } from "../Text/BodyText";
import { ContentBoxBorder } from "./ContextBoxBorder";
import { Box } from "@mui/material";
import { PixelButton } from "../Buttons/PixelButton";
import { SecondaryButton } from "../Buttons/SecondaryButton";

export default function ContextBox() {
  return (
    <ContentBoxBorder>
      <SectionTitle variant="h2">VISION</SectionTitle>
      <BodyText>
        A community-driven platform where developers and designers compete by
        submitting creative projects—from absurd UI/UX designs to funny React
        components and original experiments. Inspired by the legendary 2017
        Reddit "worst design" contest and React Bits.
      </BodyText>
      <BodyText sx={{ fontSize: "18px", fontWeight: 700, color: "#8B2BE2" }}>
        CodeCarnival is part hackathon, part meme culture, part portfolio
        builder.
        <br />
        We celebrate originality, humor, and creativity—not just technical
        correctness.
      </BodyText>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
          gap: "16px",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <PixelButton variant="contained">JOIN NOW</PixelButton>
        <SecondaryButton variant="contained">BROWSE BATTLES</SecondaryButton>
      </Box>
    </ContentBoxBorder>
  );
}
