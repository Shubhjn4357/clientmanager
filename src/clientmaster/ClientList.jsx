//import Box from '@mui/material/Box';
import {useState} from "react";
//import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import SystemUpdateAltRoundedIcon from '@mui/icons-material/SystemUpdateAltRounded';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
//import { decrement, increment } from './counterSlice'

const ClientList=()=>{
  const Data=useSelector((state)=>state.main.data)
  const [State,setState]=useState("")
    const column=[
    {field:'company'},
    {field:'email'},
    {field:'phone'},
    {field:'contact'},
    {field:'facilator'},
    {field:'site'},
    {field:'tenent'},
    {field:'tenentgroup'},
    {field:'action'}
    ]
  
  
  const options=[
    {label:"Column"},
    {label:"Row"},
  ]
  console.log(Data)

 const CustomPagination=()=>{
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
  return <Box sx={{bgColor:"primary.light",p:2}}>
  <Toolbar className="d-flex align-items-center justify-content-between">
        <TextField
                label={<div><SearchIcon/> Search Modules</div>}
                id="outlined-start-adornment"
                sx={{ m: 1}}
                value={State}
                onChange={(e)=>setState(e.target.value)}
                className="rounded-pill"
                size="small"
              />
        <Stack direction="row">
          <Autocomplete
            disablePortal
            size="small"
            className="mx-1"
            id="option-box"
            options={options}
            sx={{ width:100 }}
            renderInput={(params) => <TextField {...params} label="Format" />}
          />
          <Button variant="contained" className="rounded mx-1" color="primary" ><SystemUpdateAltRoundedIcon/> Export </Button>
        </Stack>
     </Toolbar>
     <DataGrid autoHeight
               rows={Data} 
               columns={column} 
               components={{
                  Pagination: CustomPagination,
                }} />
  </Box>
}
export default ClientList;