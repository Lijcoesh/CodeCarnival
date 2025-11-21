import styled from "@emotion/styled";
import { Typography, Stack } from "@mui/material";

export const LogoText = styled(Typography)({
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: '72px',
  fontWeight: 900,
  color: '#8B2BE2',
  letterSpacing: '4px',
  textShadow: '6px 6px 0px #000000',
  marginBottom: '32px',
});

export const ContentBox = styled(Stack)({
  border: '6px solid #000000',
  outline: '12px solid #FF1493',
  outlineOffset: '-6px',
  backgroundColor: '#FFE03D',
  padding: '48px',
  maxWidth: '800px',
  boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.3)',
  marginBottom: '48px',
});
