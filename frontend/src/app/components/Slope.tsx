import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Slopep {
  state: string;
  setstate: React.Dispatch<React.SetStateAction<string>>;
}

const Slope: React.FC<Slopep> = ({ state, setstate }) => {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    setstate(event.target.value);
  };

  return (
    <Box sx={{ width: 250 ,px:1}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">ST Slope</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="ST slope"
          onChange={handleChange}
        >
          <MenuItem value={1}>Upsloping</MenuItem>
          <MenuItem value={2}>Flat</MenuItem>
          <MenuItem value={3}>Downsloping</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Slope;