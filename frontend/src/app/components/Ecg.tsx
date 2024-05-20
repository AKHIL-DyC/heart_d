import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Ecgp {
  state: string;
  setstate: React.Dispatch<React.SetStateAction<string>>;
}

const Ecg: React.FC<Ecgp> = ({ state, setstate }) => {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    setstate(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Resting Ecg</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="resting ecg"
          onChange={handleChange}
        >
          <MenuItem value={0}>Normal</MenuItem>
          <MenuItem value={1}>Having ST-T Wave Abnormality (T wave inversions and or ST elevation or depression greater than 0.05 mV)
</MenuItem>
          <MenuItem value={2}>Showing Probable Or Definite Left Ventricular Hypertrophy by Estes Criteria
</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Ecg;