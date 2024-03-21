import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const FilePreviewContainer = styled.div`
  flex-direction: column;
  padding: 52px;
  border-radius: 8px;
  background: #3c0054;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 430px;
  margin-left: 98px;
  margin-top: 10px;
`;

export const FilePreview = styled.img`
  max-width: 100%;
  height: auto;
  width: 128px;
`;

export const FilePreviewPlaceholderText = styled(Typography)`
  font-weight: 600;
  font-size: 0.75em;
  opacity: 0.7;
`;
