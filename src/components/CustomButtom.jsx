import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const ColorButton = styled(Button)(({ theme }) => ({
  color:"#f5f2ed",
  fontWeight:"bold",
  backgroundColor: "#3e6f7e",
  '&:hover': {
    backgroundColor: "#ea8323",
  },
}));

export default function CustomizedButtons({inner_text}) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">{inner_text}</ColorButton>
    </Stack>
  );
}