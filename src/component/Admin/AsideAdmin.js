import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import DescriptionIcon from '@material-ui/icons/Description';
import StoreIcon from '@material-ui/icons/Store';
import InfoIcon from '@material-ui/icons/Info';
import CategoryIcon from '@material-ui/icons/Category';
import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import ListCustomer from './Customer/Customer';
import Product from './Product/Product';
import AboutUs from '../about/AboutMember';
import MainOrder from './Order/Order';
import Supplier from './Supplier/Supplier';
import Category from './Category/Category';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const AsideAdmin = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [showComponent, setShowComponent] = useState("product");
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const show = (nameComponent) => {
      setShowComponent(nameComponent);
    }
    const [currentComponent, setCurrentComponent] = useState(<Product/>);
    useEffect(() => {
      switch(showComponent) {
        case 'info':
          setCurrentComponent(<AboutUs/>)
          break;
        case 'product':
          setCurrentComponent(<Product/>)
            break;
        case 'customer':
          setCurrentComponent(<ListCustomer/>)
            break;
        case 'order':
          setCurrentComponent(<MainOrder/>);
          break;
        case 'supplier':
          setCurrentComponent(<Supplier/>);
          break;
        case 'category':
          setCurrentComponent(<Category/>);
          break;
        default:
            setCurrentComponent("loading");
    }
    }, [showComponent]);
    return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button onClick={() => {show("info")}}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Thông tin Admin" />
          </ListItem>
          <ListItem button onClick={() => {show("product")}}>
            <ListItemIcon><LocalGroceryStoreIcon /></ListItemIcon>
            <ListItemText primary="Quản lý sản phẩm" />
          </ListItem>
          <ListItem button onClick={() => {show("customer")}}>
            <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
            <ListItemText primary="Quản lý khách hàng" />
          </ListItem>
          <ListItem button onClick={() => {show("order")}}>
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Quản lý đơn hàng" />
          </ListItem>
          <ListItem button onClick={() => {show("supplier")}}>
            <ListItemIcon><StoreIcon /></ListItemIcon>
            <ListItemText primary="Quản lý nhà cung cấp" />
          </ListItem>
          <ListItem button onClick={() => {show("category")}}>
            <ListItemIcon><CategoryIcon /></ListItemIcon>
            <ListItemText primary="Quản lý mục lục" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {currentComponent}
      </main>
    </div>
    );
};

export default AsideAdmin;