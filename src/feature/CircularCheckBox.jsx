import { styled } from '@mui/material/styles';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import Checkbox from '@mui/material/Checkbox';
const CircularCheckbox=(props)=> {
  const CircularCheck=styled(Checkbox)({
    borderRadius:"100%"
  })
  return (
    <CircularCheck
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<RadioButtonCheckedRoundedIcon/>}
      icon={<RadioButtonUncheckedRoundedIcon />}
      inputProps={{ 'aria-label': 'Checkbox' }}
      {...props}
    />
  );
}
export default CircularCheckbox;