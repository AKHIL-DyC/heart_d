import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Sugarp {
  state: string;
  setstate: React.Dispatch<React.SetStateAction<string>>;
}

const Sugar: React.FC<Sugarp> = ({ state, setstate }) => {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    setstate(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120, px:1}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Fasting Blood Sugar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="fasting blood sugar"
          onChange={handleChange}
        >
          <MenuItem value={0}>Less than 120mg/dl</MenuItem>
          <MenuItem value={1}>Greater than 120mg/dl</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Sugar;