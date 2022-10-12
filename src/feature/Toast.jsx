import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
const Toast =({open,close,severity,msg})=>{
  
  return <Snackbar
        anchorOrigin={{vertical:"top", horizontal:"center"}}
        open={open}
        onClose={close}
        autoHideDuration={6000}
      >
      <Alert onClose={close} severity={severity}>
          {msg}
       </Alert>
    </Snackbar>
}
export default Toast;