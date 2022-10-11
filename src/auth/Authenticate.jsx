import {useState} from "react";
import {useNavigate} from "react-router-dom"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SendIcon from '@mui/icons-material/Send';
import Toast from "../feature/Toast";
const Authenticate=()=>{
  const navigate=useNavigate();
  const [values, setValues] = useState({
    email:"",
    password:"",
    showPassword: false,
  });
  const [open, setOpen] = useState({
    open:false,
    msg:"",
    severity:"",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const signIn=()=>{
  
    fetch("https://reqres.in/api/login",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email:values.email,password:values.password})
    })
    .then((token)=>{
      setOpen({open:true,
        msg:"welcome",
        severity:"success"
      })
      window.localStorage.setItem("token",token)
      navigate("/client/view")
    })
    .catch((error)=>{
      setOpen({open:true,
        msg:error,
        severity:"error"
      })
    })
  }
  const handleClose=()=>{
    setOpen({
      open:false,
      msg:"",
      severity:""
    })
  }
  return (<div className="container-fluid">
  <Toast open={open.open} severity={open.severity} close={handleClose}/>
  <div className="row d-center">
  <div className="d-center col-5 p-4">
    <Box variant="form" className="d-center py-4 flex-column">
    <Typography className="text-center mt-2 mb-1" variant="h4">Welcome</Typography>
    <Typography className="text-center mb-2" variant="p">Enter Your User Name & Password</Typography>
      <FormControl sx={{ m: 1 ,width:"100%"}}  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            name="email"
            type='email'
            
            value={values.email}
            onChange={handleChange}
            startAdornment={ <InputAdornment position="start"><Person2RoundedIcon/></InputAdornment>}
            label="email"
          />
        </FormControl>
      <FormControl sx={{ m: 1,width:"100%"}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            startAdornment={ <InputAdornment position="start"><LockRoundedIcon/></InputAdornment>}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button onClick={signIn} className="mt-2 mb-1" color="primary" fullWidth variant="contained">Login <span style={{fontSize:"0.3rem"}}><SendIcon/></span></Button>
        <Button className="mb-2" color="secondary" fullWidth><Typography variant="p">Forget Password ?</Typography></Button>
    </Box>
  </div>
  <Box className="d-center col-7 flex-column" sx={{width:"35rem",height:"25rem", backgroundColor:'primary.main'}}>
      <Box variant="div" className="perspective-box"></Box>
      <Typography className="my-4 py-2" variant="p" sx={{color:"#ffffff"}}>360° Solution For Assets Management</Typography>
  </Box>
  </div>
  </div>)
}
export default Authenticate;