import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AddData} from "../feature/StateManager";
import {useNavigate} from "react-router-dom";
import {state,city_names,siteNum} from "../feature/ArrayList";

const PaymentSetup=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const company=sessionStorage.getItem("company");
  
  const formField={
    billadress:"",
    state:"",
    city:"",
    pincode:"",
    site:"",
    amount:"",
    discount:"",
    reason:"",
    mode:{
      upi:false,
      netbank:false,
      cash:false,
      cheque:false,
      other:false
    },
    paystatus:""
  }
  const [PaymentField,setPaymentField]=useState(formField);
  const HandleChange=(e)=>{
    setPaymentField({
      ...PaymentField,
      [e.target.name]:e.target.value})
  }
  const handlePay=(e)=>{
    setPaymentField({
      ...PaymentField,
      mode:{...PaymentField.mode,
      [e.target.name]:e.target.checked
      }
    })
  }
  const reset=()=>{
    setPaymentField(formField)
  }
  const save=()=>{
    dispatch(AddData({name:company,payload:PaymentField,type:"payment"}))
    reset()
    navigate(`add/theme`)
  }
  return (
    <Box sx={{p:2}} className="text-start">
    <Typography variant="h4" className="fw-bold">
      Create Client Profile
    </Typography>
    <Typography className="secondary.text" variant="p">
      Add Some Basic Information Related To Client
    </Typography>
      <Box sx={{p:2}} className="container-fluid" varaint="form">
         <div className="row">
          <div className="col-12">
            <TextField variant="outlined" fullWidth label="Billing Address" className="my-2" name="billadress" value={PaymentField.billadress} onChange={HandleChange} required/>
          </div>
          <div className="col-5">  
            <TextField select variant="outlined" fullWidth label="Select State" className="my-2" value={PaymentField.state} name="state" onChange={HandleChange} required>
             { state.map((i)=>{
               return <MenuItem key={i} value={i}>{i}</MenuItem>
             })}
           </TextField>
          </div>
          <div className="col-4">  
            <TextField select variant="outlined" fullWidth label="Select City" className="my-2" value={PaymentField.city} name="city" onChange={HandleChange} required>
             { city_names.map((i)=>{
               return <MenuItem key={i} value={i}>{i}</MenuItem>
             })}
           </TextField>
          </div>
          <div className="col-3">
            <TextField variant="outlined" fullWidth label="Pin Code" className="my-2" name="pincode" value={PaymentField.pincode} onChange={HandleChange} required/>
          </div>
          <div className="col-md-6 col">
           <TextField variant="outlined" select fullWidth label="Select Number Of Site Access" className="my-2" name="site" value={PaymentField.site} onChange={HandleChange} required>
             {siteNum.map((i)=>{
               return <MenuItem key={i} value={i}>{i}</MenuItem>
             })}
           </TextField>
         </div>
         <div className="col-md-6 col">
        <FormControl sx={{ m: 1,}} variant="outlined">
         <InputLabel htmlFor="outlined-adornment-rs">Payable Amount Per Site</InputLabel>
          <OutlinedInput
            id="outlined-adornment-rs"
            type="number"
            value={PaymentField.amount}
            onChange={HandleChange}
            name="amount"
            startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
            endAdornment={<InputAdornment position="end">Total Rs {PaymentField.amount*PaymentField.site}</InputAdornment>}
            aria-describedby="outlined-amount"
            inputProps={{
              'aria-label': 'amount',
            }}
            required
          />
         </FormControl>
        </div>
        <div className="col-md-6 col">
            <TextField variant="outlined" fullWidth label="Discount(%)" className="my-2" name="discount" value={PaymentField.discount} onChange={HandleChange} required/>
        </div>
        <div className="col-md-6 col">
            <TextField variant="outlined" fullWidth label="Reason" className="my-2" name="reason" value={PaymentField.reason} onChange={HandleChange} required/>
        </div>
       </div>
       <div className="row">
        <div className="col-6">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel className="fw-bolder" component="legend">Payment Mode</FormLabel>
          <div className="d-flex flex-wrap">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={PaymentField.mode.upi} onChange={handlePay} name="upi" />
              }
              label="Upi"
            />
           </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={PaymentField.mode.netbank} onChange={handlePay} name="netbank" />
              }
              label="Net Banking"
            />
           </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={PaymentField.mode.cash} onChange={handlePay} name="cash" />
              }
              label="Cash"
            />
           </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={PaymentField.mode.cheque} onChange={handlePay} name="cheque" />
              }
              label="Cheque"
            />
           </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={PaymentField.mode.other} onChange={handlePay} name="other" />
              }
              label="Others"
            />
           </FormGroup>
           </div>
          </FormControl>
        </div>
        <div className="col-md-6 col">
          <FormControl>
            <FormLabel id="radio-buttons-group-label">Payment Status</FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              value={PaymentField.paystatus}
              name="paystatus"
              className="d-flex"
              onChange={HandleChange}
            >
              <FormControlLabel value="paid" control={<Radio />} label="Paid" />
              <FormControlLabel value="pending" control={<Radio />} label="Pending" />
           </RadioGroup>
          </FormControl>
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
    
    )
}
export default PaymentSetup;