import { Box, Container } from "@mui/material";
import { SectionTitle } from "../Landingpage/Components/ContextBox/Components/Text/SectionTitle";
import { FeatureCard } from "./Components/FeatureCard";
import { FeatureTitle } from "./Components/FeatureTitle";
import { FeatureText } from "./Components/FeatureText";

export default function CodeFeatures() {
  return (
    <Box
      style={{
        backgroundColor: "#8B2BE2",
        padding: "64px 24px",
        borderTop: "8px solid #000000",
        borderBottom: "8px solid #000000",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          variant="h2"
          sx={{ backgroundColor: "#FFE03D", color: "#8B2BE2" }}
        >
          CODE FEATURES
        </SectionTitle>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "24px",
          }}
        >
          <FeatureCard>
            <FeatureTitle>Real-time Collaboration</FeatureTitle>
            <FeatureText>
              Work together with fellow coders in real-time. Share ideas,
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Real-time Collaboration</FeatureTitle>
            <FeatureText>
              Work together with fellow coders in real-time. Share ideas,
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Real-time Collaboration</FeatureTitle>
            <FeatureText>
              Work together with fellow coders in real-time. Share ideas,
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Real-time Collaboration</FeatureTitle>
            <FeatureText>
              Work together with fellow coders in real-time. Share ideas,
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Real-time Collaboration</FeatureTitle>
            <FeatureText>
              Work together with fellow coders in real-time. Share ideas,
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Real-time Collaboration</FeatureTitle>
            <FeatureText>
              Work together with fellow coders in real-time. Share ideas,
            </FeatureText>
          </FeatureCard>
        </Box>
      </Container>
    </Box>
  );
}
