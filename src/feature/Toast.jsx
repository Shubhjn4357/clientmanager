const Toast =({open,close,severity})=>{
  return <Snackbar
        anchorOrigin={{ "top", "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      />
      <Alert onClose={handleClose} severity={severity}>
          {open.msg}
       </Alert>
    </Snackbar>
}
export default Toast;