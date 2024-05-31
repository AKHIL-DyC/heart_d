import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface AnginaProps {
  state: string;
  setstate: React.Dispatch<React.SetStateAction<string>>;
}

const Angina: React.FC<AnginaProps> = ({ state, setstate }) => {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    setstate(event.target.value);
  };
  return (
    <Box sx={{ width: 250, px:1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Exercise Angina</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Exercise Angina"
          onChange={handleChange}
        >
          <MenuItem value={0}>No</MenuItem>
          <MenuItem value={1}>Yes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Angina;