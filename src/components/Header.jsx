import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export const Header = () => {
  return (

    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" 
        sx={{flexGrow:1}}
        component='span'>
          MUI SHOP
        </Typography>

        <IconButton
          color="inherit"
        >
          <ShoppingBasketIcon />
        </IconButton>

      </Toolbar>
    </AppBar>

  )
}



