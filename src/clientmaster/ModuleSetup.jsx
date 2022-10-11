import Box from "@mui/material/Box";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {useDispatch} from "react-redux";
import {AddData} from "../feature/StateManager";
import {useNavigate} from "react-router-dom";

const ModuleSetup=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const company=sessionStorage.getItem("company");
  const StyledList=styled(List)(({theme})=>({
    '& .MuiListItem-root':{
      '& .MuiButtonBase-root':{
        borderRadius:"0.5rem",
        '&:hover':{
          backgroundColor:theme.palette.primary.main,
          color:theme.palette.text.primary,
          transform:"scale(0.95)"
        },
        '&:active':{
          backgroundColor:theme.palette.primary.main,
          color:theme.palette.text.primary,
          transform:"scale(0.95)"
        }
      }
    }
  }))
  const formField={
      home:true,
      helpdesk:true,
      assets:true,
      dailytask:true,
      tasks:{
        summary:false,
        viewtask:false,
        createtask:false,
        logbook:false,
        logsheet:false,
        sheet:{
          daily:false,
          activity:false
        }
      },
      ppm:false,
      employee:true,
      profile:true,
      transaction:true,
    }
    
  const [ModuleField,setModuleField]=useState(formField);
  const [SubModules,setSubModule]=useState(false);
  const handleModule=(e)=>{
      setModuleField({...ModuleField,
        [e.target.name]:e.target.checked
      })
    }
  const handleTask=(e)=>{
      setModuleField({...ModuleField,
      tasks:{
        ...ModuleField.tasks,
        [e.target.name]:e.target.checked
      }
      })
    }
  const handleSheet=(e)=>{
      setModuleField({...ModuleField,
      tasks:{
        ...ModuleField.tasks,
        sheet:{
        ...ModuleField.tasks.sheet,
        [e.target.name]:e.target.checked
        }
      }
      })
    }
    
 const handleSubModule=()=>{
    setSubModule(!SubModules);
    setModuleField({...ModuleField,
      tasks:{
        summary:!ModuleField.tasks.summary,
        viewtask:!ModuleField.tasks.viewtask,
        createtask:!ModuleField.tasks.createtask,
        logbook:!ModuleField.tasks.logbook,
        logsheet:!ModuleField.tasks.logsheet,
        sheet:{
          daily:!ModuleField.tasks.sheet.daily,
          activity:!ModuleField.tasks.sheet.activity
        }
      }
      })
 }
 const reset=()=>{
    setModuleField(formField)
  }
  const save=()=>{
    dispatch(AddData({name:company,payload:ModuleField,type:"module"}))
    reset()
    navigate(`add/success`)
  }
  return  <Box sx={{p:2}} className="text-start">
    <Typography variant="h4" className="fw-bold">
      Modules Setup
    </Typography>
    <Typography className="secondary.text" variant="p">
      Select The Module That The Client Can Use 
    </Typography>
      <Box sx={{p:2}} variant="form" className="container-fluid">
       <div className="row">
        <div className="col-4">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel className="fw-bolder" component="legend">Payment Mode</FormLabel>
          <div className="d-block">
          <StyledList>
             <ListItem disablePadding>
              <ListItemButton>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={ModuleField.home} onChange={handleModule} name="home" />
                    }
                    label="Home/DashBoard"
                  />
                 </FormGroup>
                </ListItemButton>
               </ListItem>
             <ListItem disablePadding>
              <ListItemButton>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.helpdesk} onChange={handleModule} name="helpdesk" />
                  }
                  label="Helpdesk"
                />
               </FormGroup>
              </ListItemButton>  
             </ListItem>
             <ListItem disablePadding>
              <ListItemButton>  
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.assets} onChange={handleModule} name="assets" />
                  }
                  label="Assets"
                />
               </FormGroup>
              </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
              <ListItemButton>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.dailytask} onChange={handleModule} name="dailytask" />
                  }
                  label="Daily Tasks "
                />
               </FormGroup>
               <span className="fs-1"><ArrowForwardIosRoundedIcon/></span>
              </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
              <ListItemButton>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.ppm} onChange={handleModule} name="ppm" />
                  }
                  label="PPM"
                />
               </FormGroup>
              </ListItemButton>
            </ListItem>
             <ListItem disablePadding>
              <ListItemButton>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.employee} onChange={handleModule} name="employee" />
                  }
                  label="Employees"
                />
               </FormGroup>
              </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
              <ListItemButton>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.profile} onChange={handleModule} name="profile" />
                  }
                  label="Profile"
                />
               </FormGroup>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.transaction} onChange={handleModule} name="transaction" />
                  }
                  label="Transactions"
                />
               </FormGroup>
              </ListItemButton>
             </ListItem>
             </StyledList>
           </div>
           </FormControl>
        </div>
        <div className={`col-8 card ${ModuleField.dailytask?"d-block":"d-none"}`}>
          <div className="card-header d-center">
            <div className="card-head-icon d-center"><SportsSoccerRoundedIcon/></div>
           <div className="p-1">
             <Typography variant="h5" className="fw-bold w-100">
              Daily Tasks
            </Typography>
            <Typography className="secondary.text fs-sm text-wrap w-100" variant="p">
              Select The Sub Module That The Client Can Use 
            </Typography>
          </div>
          <Button color="primary" variant="contained" >
            ✓ Visible To Client
          </Button>
          </div>
          <Divider/>
         <div className="card-body p-2 my-2">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel className="fw-bolder" component="legend">
              <FormGroup>
                <FormControlLabel sx={{fontWeight:"bolder"}}
                  control={
                    <Checkbox checked={SubModules} onChange={handleSubModule} />
                  }
                  label="Show All SubModules"
                />
               </FormGroup>
          </FormLabel>
          <div className="d-block">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.tasks.summary} onChange={handleTask} name="summary" />
                  }
                  label="Summary"
                />
               </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.tasks.viewtask} onChange={handleTask} name="viewtask" />
                  }
                  label="View Tasks"
                />
               </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.tasks.createtask} onChange={handleTask} name="createtask" />
                  }
                  label="Create New Task"
                />
               </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.tasks.logbook} onChange={handleTask} name="logbook" />
                  }
                  label="Logbook"
                />
               </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={ModuleField.tasks.logsheet} onChange={handleTask} name="logsheet" />
                  }
                  label="Logsheet"
                />
               </FormGroup>
               <div className="d-block p-1 px-4">
                <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox disabled={!ModuleField.tasks.logsheet} checked={ModuleField.tasks.sheet.daily} onChange={handleSheet} name="daily" />
                  }
                  label="Daily"
                />
               </FormGroup>
                <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox disabled={!ModuleField.tasks.logsheet} checked={ModuleField.tasks.sheet.activity} onChange={handleSheet} name="activity" />
                  }
                  label="Activity Wise"
                />
               </FormGroup>
               </div>
          </div>
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
      </div>
     </Box>
    </Box>
}
export default ModuleSetup;