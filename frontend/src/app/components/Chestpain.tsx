import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface chestpain{
  state: string;
  setstate: React.Dispatch<React.SetStateAction<string>>;
}

const Chestpain: React.FC<chestpain> = ({ state, setstate }) => {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    setstate(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Chest Pain Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Chest Pain Type"
          onChange={handleChange}
        >
          <MenuItem value={0}>Typical Angina</MenuItem>
          <MenuItem value={1}>Atypical Angina</MenuItem>
          <MenuItem value={2}>Non Anginal Pain</MenuItem>
          <MenuItem value={3}>Asymptomatic</MenuItem>
          <MenuItem value={4}>very high</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Chestpain;