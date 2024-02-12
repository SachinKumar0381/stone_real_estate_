import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const ColorButton = styled(Button)(({ theme }) => ({
  color:"#f5f2ed",
  fontWeight:"bold",
  backgroundColor: "#ea8323",
  '&:hover': {
    backgroundColor: "#e69d5a",
  },
}));

export default function CustomizedButtons({inner_text}) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">{inner_text}</ColorButton>
    </Stack>
  );
}