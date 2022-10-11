import Box from "@mui/material/Box";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import { MuiColorInput} from 'mui-color-input'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import CircularCheckbox from "../feature/CircularCheckBox";
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {AddData} from "../feature/StateManager";
import {useNavigate} from "react-router-dom";
const ThemeSetup=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const company=sessionStorage.getItem("company");
  const DefaultTheme={
    primary:"#007eff",
    login:"#007eff",
    model:"center"
  }
  const [ThemeSetup,setThemeSetup]=useState(DefaultTheme)
  const [Uselogin,setUseLogin]=useState(false)
  const handleColor=(e,type)=>{
      setThemeSetup({
        ...ThemeSetup,
        [type]:e})
  }
  const handleChange=(e)=>{
    setThemeSetup({
        ...ThemeSetup,
        [e.target.name]:e.target.value})
    }
  const HandleCheck=(e)=>{
    setUseLogin(e.target.checked)
  }
 const reset=()=>{
    setThemeSetup(DefaultTheme)
  }
  const save=()=>{
    dispatch(AddData({name:company,payload:ThemeSetup,type:"theme"}))
    reset()
    navigate(`module`)
  }
  return( <>
    <Box sx={{p:2}} className="text-start">
    <Typography variant="h4" className="fw-bold">
      Theme Setup
    </Typography>
    <Typography className="secondary.text" variant="p">
      Add Information About The Client to Give Them A Personalized Experience 
    </Typography>
      <Box sx={{p:2}} variant="form">
        <div className="text-start d-flex flex-column">
            <MuiColorInput size="small"
                           variant="outlined" 
                           format="hex" 
                           className="my-2"
                           name="primary"
                           value={ThemeSetup.primary} 
                           onChange={(e)=>handleColor(e,"primary")}
                           label="Primary Color"
                           sx={{width:"18rem"}}
                           />
              <Typography variant="small" className="text-start w-100">Add Hex Value</Typography>
        </div>
        <div className="text-start my-2 d-flex flex-column">
            <Typography variant="h6" className="fw-bolder">
              Login Theme
            </Typography>
            <Typography className="secondary.text" variant="p">
              Select The Look & Feel Of Login Page
            </Typography>
           <FormGroup>
            <FormControlLabel
              control={
              <CircularCheckbox checked={Uselogin} onChange={HandleCheck} className="mt-2" />
              }
            label="use Login"
            />
           </FormGroup>  
            <MuiColorInput size="small"
                           variant="outlined" 
                           format="hex" 
                           className="my-2"
                           name="login"
                           disabled={!Uselogin}
                           value={ThemeSetup.login} 
                           onChange={(e)=>handleColor(e,"login")}
                           sx={{width:"18rem"}}
                           important="true"
                           />
        </div>
        <div className="w-100">
            <FormControl>
            <FormLabel className="fw-bold" id="radio-buttons-group-label">Where Should Be The Login Model</FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              value={ThemeSetup.model}
              name="model"
              className="flex-row"
              onChange={handleChange}
            >
            <div className="Block-left">
             <div className="Block-Model"></div>
              <FormControlLabel className="Block-Label" value="left" control={<Radio />} label="Left" />
            </div> 
            <div className="Block-right">
             <div className="Block-Model"></div>
              <FormControlLabel className="Block-Label" value="right" control={<Radio />} label="Right" />
            </div> 
            <div className="Block-center">
             <div className="Block-Model"></div>
              <FormControlLabel className="Block-Label" value="center" control={<Radio />} label="Center" />
            </div> 
          </RadioGroup>
          </FormControl>
        </div>
        <div className=" my-2 d-flex text-start p-2">
        <Button className="mx-2" sx={{width:"12rem"}} onClick={save} variant="contained" color="primary">
            Save & Continue >
        </Button>
        <Button size="small" sx={{width:"8rem"}}  className="mx-2" onClick={reset} color="warning">
            Reset <RotateLeftRoundedIcon/>
        </Button>
       </div>
      </Box>
    </Box>
  </>)
}
export default ThemeSetup