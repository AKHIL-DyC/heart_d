import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Tfield({state,setstate,title}) {
  const[error,seterror]=React.useState(false);
  const handlechange=(event)=>{
   const enteredvalue=event.target.value
   const parsedvalue=parseInt(enteredvalue);
   setstate(enteredvalue);
   if(enteredvalue>0&&enteredvalue<200){
    seterror(false)
   }
   else{
    seterror(true)
   }
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
      <TextField id="outlined-basic"  label={title} variant="outlined" onChange={handlechange}  value={state}
      error={error}
      helperText={error ? "enter valid value" : ""} />
    
    </Box>
  );
}