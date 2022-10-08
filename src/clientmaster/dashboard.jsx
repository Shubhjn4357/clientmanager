import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import {useState} from "react";
import {Link,
  useLocation,
} from "react-router-dom";
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import ClientRoute from "../ClientRoute";

import Breadcrumbs from '@mui/material/Breadcrumbs';
const drawerWidth = 240;
const breadcrumbNameMap = {

  '/client': 'client',
  '/client/view': 'View',
  '/client/add': 'Create',
  '/client/add/payment': 'payment',
  '/client/add/theme': 'theme',
  '/client/add/module': 'modules',
};
const list=[
  {text:"View Client",icon:<MailIcon/>,path:"/client/view"},
  {text:"Add Client",icon:<InboxIcon/>,path:"/client/add"}
  ]
const Dashboard=()=> {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [State,setState]=useState("")
  const [Item,setItem]=useState("")
  const StyledList=styled(List)(({theme})=>({
    padding:'0.5rem',
    '& .MuiListItem-root':{
      '& .MuiButtonBase-root':{
        borderRadius:"5rem",
        '&:hover':{
          backgroundColor:theme.palette.primary.main,
          color:theme.palette.text.primary,
          transform:"scale(0.9)"
        },
        '&:active':{
          backgroundColor:theme.palette.primary.main,
          color:theme.palette.text.primary,
          transform:"scale(0.9)"
        }
      }
    }
  }))
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className="d-block p-1">
          <Typography variant="span" className="h5 fw-bold text-start px-2">Company Name</Typography>
          <TextField
                    label={<div><SearchIcon/> Search Modules</div>}
                    id="outlined-start-adornment"
                    sx={{ m: 1}}
                    value={State}
                    onChange={(e)=>setState(e.target.value)}
                    className="rounded-pill"
                    size="small"
                  />
        </Toolbar>
        <Typography className="text-start ms-2" variant="span" sx={{color:"primary.secondary" }}>Client Master</Typography>
        <StyledList>
          {list.map((item, index) => (
            <ListItem component={Link} to={item.path} key={index} disablePadding>
              <ListItemButton onClick={()=>setItem(item.text)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </StyledList>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      <Typography className="fw-bolder text-start" variant="h4">{Item}</Typography>
    <Breadcrumbs seperator=">" aria-label="breadcrumb">
      <Link underline="hover" color="inherit" to="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
       const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <Link underline="hover" color="text.inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </Link>
        );
      })}
    </Breadcrumbs>
      <ClientRoute/>
      </Box>
    </Box>
  );
}
export default Dashboard;