import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Selectorp {
  state: string;
  setstate: React.Dispatch<React.SetStateAction<string>>;
}

const Selector: React.FC<Selectorp> = ({ state, setstate }) => {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    setstate(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 ,px:1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sex</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Sex"
          onChange={handleChange}
        >
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={0}>Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Selector;