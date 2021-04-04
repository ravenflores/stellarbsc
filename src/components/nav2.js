import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) =>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#000301",

  },
  title: {
    flexGrow: 1,
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(anchor)

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
      <ListItem button key={"dx"}  onClick={(e) => {
      e.preventDefault();
      window.location.href="https://dxsale.app/app/pages/defipresale?saleID=549&chain=BSC";
      }}>
            <ListItemText primary={"DxSale"} />
          </ListItem>


      <ListItem button key={"tg"}     onClick={(e) => {
      e.preventDefault();
      window.location.href="https://t.me/StellarBsc";
      }}>
            <ListItemText primary={"Telegram"} />
          </ListItem>

          <ListItem button key={"tg"}     onClick={(e) => {
      e.preventDefault();
      window.location.href="https://twitter.com/stellarbsc";
      }}>
            <ListItemText primary={"Twitter"} />
          </ListItem>


          <ListItem button key={"pcs"}     onClick={(e) => {
      e.preventDefault();
      window.location.href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x072cf6aee0669f148eec12f1a917786997f593e2&inputCurrency=BNB";
      }}>
            <ListItemText primary={"Pancakeswap"} />
          </ListItem>


          <ListItem button key={"telegram"}     onClick={(e) => {
      e.preventDefault();
      window.location.href="https://bscscan.com/address/0x072cf6aee0669f148eec12f1a917786997f593e2#code";
      }}>
            <ListItemText primary={"Contract"} />
          </ListItem>
        
      </List>
     
    </div>
  );

  return (
      
    <div>
    <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
         
          </Typography>
          <IconButton
            id = "sidenav-trigger"
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer('right', true)}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
