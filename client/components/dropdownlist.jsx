import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
//import whaleTable from '../../server/data/whaleTable.json'
//const whaleTable = require('../../server/data/whaleTable.json');
import whaleTable from '../docs/whaleTable';
export default function DropdownList(props) {

  const [whale, setWhale] = React.useState('');
  const navigate = useNavigate();
  //console.log(whaleTable);
  

  const handleChange = (event) => {
    const walletAddress = event.target.value;
    //console.log('event ---->:', event);
    setWhale(event.target.value);
    //console.log('whale ---->:', walletAddress);
    navigate(`/holdings/${walletAddress}`);
  };
const menuItems = whaleTable.map((element, index) => {
 return <MenuItem key={`Menu Item ${index}`} value={element.wallet}>{element.name}</MenuItem>
})
  return (
    <div id='dropdown'>
      <Box sx={{ minWidth: 300 }}>
        <FormControl id='form-control' fullWidth>
          <InputLabel id="demo-simple-select-label">Choose a Whale</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={whale}
            label="Select a Whale"
            onChange={handleChange}
          >
            {/* <MenuItem value={10}>Snoop Dogg</MenuItem>
            <MenuItem value={30}>Gary Vaynerchuk</MenuItem>
            max height overflow scroll
            <MenuItem value={20}>Jay Z</MenuItem> */}
            {menuItems}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}