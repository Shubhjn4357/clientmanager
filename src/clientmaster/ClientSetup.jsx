import {useState} from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import ClientSetupRoute from "../ClientSetupRoute";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const ClientSetup=()=> {
  const navigate=useNavigate();
  const [value, setValue] = useState(0);
  const Items=[
    {label:"Create Profile",path:""},
    {label:"Payment Setup",path:"payment"},
    {label:"Theme Setup" ,path:"theme"},
    {label:"Modules Setup",path:"module"},
    ]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const ForwardTo=(path)=>{
  navigate(path)
}
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="tabs">
         {Items.map((i,index)=>{
          return <Tab key={index} label={i.label} onClick={()=>ForwardTo(i.path)} {...a11yProps(index)} value={index}/>
         })}
        </Tabs>
        <ClientSetupRoute/>
      </Box>
    </Box>
  );
}
export default ClientSetup;