import React from 'react';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  useEffect(() => {
    document.title = "React training";
  })
  
  return (
    <>
    <h1>Home Page</h1>
    <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Stack>
  </>
  )
}
