import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
const Toast =({open,close,severity})=>{
  return <Snackbar
        anchorOrigin="top center"
        open={open}
        onClose={close}
        autoHideDuration={6000}
      >
      <Alert onClose={close} severity={severity}>
          {open.msg}
       </Alert>
    </Snackbar>
}
export default Toast;