import * as React from 'react';
import Link from 'next/link'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/system';

const CentralContent = styled("div")({
    padding : 50
})
export default function IconLabelButtons(props) {
  return (
   <CentralContent>
   <Link href={props.path} >

   <Stack direction="row" justifyContent='center' spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />}>
        View All Post
      </Button>
    </Stack>
   </Link>
   </CentralContent>
  );
}
