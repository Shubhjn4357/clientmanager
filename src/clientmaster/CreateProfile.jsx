import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import {useState} from "react";
import {dummyCategory,state,city_names,facility} from "../feature/ArrayList";
const CreateProfile=()=>{
  const formField={
    file:"",
    company:"",
    category:"",
    email:"",
    state:"",
    gst:"",
    website:"",
    facility:"",
    number:"",
    city:"",
    pincode:"",
    fax:"",
  }
  const [CompanyData,setCompanyData]=useState(formField);
  const HandleChange=(e)=>{
    setCompanyData({
      ...CompanyData,
      [e.target.name]:e.target.value})
  }
  const reset=()=>{
    setCompanyData(formField)
  }
  const save=()=>{
    console.log(CompanyData)
    reset()
  }
  return <>
  <Box sx={{p:2}} className="text-start">
    <Typography variant="h4" className="fw-bold">
      Create Client Profile
    </Typography>
    <Typography className="secondary.text" variant="p">
      Add Some Basic Information Related To Client
    </Typography>
    <Box sx={{p:2}} className="container-fluid" varaint="form">
         <div className="fileControl">
          <input type="file" id="FileInput" name="file" value={CompanyData.file} onChange={HandleChange} required/>
          <InputLabel className="text-start" htmlFor="FileInput">
            <Typography className="fw-bolder" variant="h4">Company Logo</Typography>
            <Typography variant="small">Logo Ration Should Be 1:1 and Should be 120px x 120px</Typography>
          </InputLabel>
         </div> 
        <div className="row">
          <div className="col-md-6 col">
            <TextField variant="outlined" fullWidth label="Company Name" className="my-2" name="company" value={CompanyData.company} onChange={HandleChange} required/>
            <TextField select variant="outlined" fullWidth label="Select Business Category" className="my-2" value={CompanyData.category} name="category" onChange={HandleChange} required>
             { dummyCategory.map((i)=>{
               return <MenuItem key={i} value={i}>{i}</MenuItem>
             })}
           </TextField>
           <TextField variant="outlined" fullWidth label="Company Email Address" className="my-2" name="email" value={CompanyData.email} onChange={HandleChange} required/>
            <TextField select variant="outlined" fullWidth label="Select States" className="my-2" name="state" value={CompanyData.state} onChange={HandleChange} required>
             { state.map((i)=>{
               return <MenuItem key={i} value={i}>{i}</MenuItem>
             })}
           </TextField>
           <TextField variant="outlined" fullWidth label="Gst Number" className="my-2" name="gst" value={CompanyData.gst} onChange={HandleChange} required/>
          </div>
          
          
          
          
          
          
          <div className="col-md-6 col">
            <TextField variant="outlined" fullWidth label="Website" className="my-2" name="website" value={CompanyData.website} onChange={HandleChange} required/>
            <TextField select variant="outlined" fullWidth label="Select Facility Management Company" value={CompanyData.facility} className="my-2" name="facility" onChange={HandleChange} required>
             { facility.map((i)=>{
               return <MenuItem key={i} value={i}>{i}</MenuItem>
             })}
           </TextField>
           <TextField variant="outlined" fullWidth label="Mobile Number" className="my-2" name="number" value={CompanyData.number}onChange={HandleChange} required/>
           <div className="d-flex w-100">
            <TextField select variant="outlined" sx={{width:"10rem"}} label="Select City" className="my-2" name="city" value={CompanyData.city} onChange={HandleChange} required>
             { city_names.map((i)=>{
               return <MenuItem key={i} value={i}>{i}</MenuItem>
             })}
           </TextField>
           <TextField variant="outlined" label="Pin Code" className="my-2 ms-1" name="pincode" value={CompanyData.pincode} onChange={HandleChange} required/>
         </div>
           <TextField variant="outlined" fullWidth label="Fax Number" className="my-2" name="fax" value={CompanyData.fax} onChange={HandleChange}/>
          </div>
        </div>
       <div className="row my-2 d-flex text-start p-2">
        <Button className="mx-2" sx={{width:"15rem"}} onClick={save} variant="contained" color="primary">
            Save & Continue >
        </Button>
        <Button size="small" sx={{width:"8rem"}}  className="mx-2" onClick={reset} color="warning">
            Reset <RotateLeftRoundedIcon/>
        </Button>
       </div>
    </Box>
  </Box>
  </>
}
export default CreateProfile