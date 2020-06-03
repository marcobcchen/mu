import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar,Toolbar,Tabs,Tab,Button,Menu,MenuItem,useMediaQuery,SwipeableDrawer,IconButton,List,ListItem,ListItemText } from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import MenuIcon from '@material-ui/icons/Menu';

import { IApp } from './IApp'

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    background: theme.custom.blue,
    zIndex: theme.zIndex.modal + 1,
  },
  text: {
    color: theme.palette.common.orange,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "0.5em"
    },
  },
  logo: {
    height: "5em",
    [theme.breakpoints.down('sm')]: {
      height: "4.5em"
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    fontWeight: 300,
    fontSize: "1rem",
    minWidth: 10,
  },
  button: {
    borderRadius: 20,
    marginLeft: "40px",
    marginRight: "25px",
    fontSize: "0.6rem",
    textTransform: "none",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    }
  },
  menuItemSelected: {
    opacity: 1,
  },
  menuButton: {
    marginLeft: 'auto',
    '&:hover': {
      background: 'transparent',
    }
  },
  menuIcon: {
    width: '40px',
    height: '40px',
  },
  drawer: {
    background: theme.palette.common.blue,
  },
  listText: {
    color: theme.palette.common.white,
    opacity: 0.7,
  },
  listTextSelected: {
    opacity: 1,
  },
  listEstimate: {
    background: theme.palette.common.orange
  }
}));

interface IProps {
  window?: () => Window;
  children: React.ReactElement;
}

interface IItemList{
  name: string
  link: string
  activedIndex: number
  itemSelectedIndex: number
}

interface IRoute{
  name: string
  link: string
  activedIndex: number
  itemSelectedIndex?: number
  onMouseOver?: (e: React.MouseEvent) => void
}

interface Process {
  browser: boolean
}
declare const process: Process

const HideOnScroll = (props: IProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={600}>
      {children}
    </Slide>
  );
}



const Header = (props: IApp) => {
  const classes = useStyles();
  const theme = useTheme()
  const mathes = useMediaQuery(theme.breakpoints.down('sm'))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  // console.log(process)

  const {value, setValue, selectedItem, setSelectedItem} = props
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false)
  

  const changeHandler = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const clickHandler = (e: React.BaseSyntheticEvent<{}>) => {
    // console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const closeHandler = () => {
    setAnchorEl(null);
    setOpen(false);

    // console.log(selectedItem);
  };

  const selectedHandler = (e: React.MouseEvent<{}>, index: number) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedItem(index)
    setValue(1)
  }

  const routes: IRoute[] = [
    {name: 'Home', link: '/', activedIndex: 0},
    {name: 'Services', link: '/services', activedIndex: 1, onMouseOver: (e: React.MouseEvent)=>clickHandler(e)},
    {name: 'The Revolution', link: '/revolution', activedIndex: 2},
    {name: 'About Us', link: '/about', activedIndex: 3},
    {name: 'Contact Us', link: '/contact', activedIndex: 4},
  ]

  const itemList: IItemList[] = [
    {name: 'Services', link: '/services', activedIndex: 1, itemSelectedIndex: 0},
    {name: 'Software Development', link: '/software', activedIndex: 1, itemSelectedIndex: 1},
    {name: 'Mobile Development', link: '/mobile', activedIndex: 1, itemSelectedIndex: 2}, 
    {name: 'Website Development', link: '/website', activedIndex: 1, itemSelectedIndex: 3}
  ]

  const MenuItemComponent = () => {
    return(
      itemList.map((item, index)=>{
        return(
          <MenuItem 
            key={item.name}
            component={Link} 
            to={item.link} 
            onClick={(e: React.MouseEvent<{}>)=>{selectedHandler(e, index)}}
            classes={
              index === selectedItem ?
              {root: classes.menuItemSelected} :
              {root: classes.menuItem}
            } 
            selected={index === selectedItem}
          >
            {item.name}
          </MenuItem>
        )
      })
    )
  }

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor="right"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map((route, index) => {
            return(
              <ListItem key={index} onClick={() => {setOpenDrawer(false); setValue(route.activedIndex);}} divider button component={Link} to={route.link} selected={value === route.activedIndex}>
                <ListItemText 
                  className={
                    value === route.activedIndex ? 
                    `${classes.listTextSelected} ${classes.listText}`
                    : 
                    classes.listText
                  } 
                >
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          })}
          <ListItem className={classes.listEstimate} onClick={() => setOpenDrawer(false)} button>
            <ListItemText className={classes.listText}>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.menuButton} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </React.Fragment>
  )

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={changeHandler}
        indicatorColor="primary"
      >
        {routes.map((route, index) => {
          return (
            <Tab 
              key={index}
              className={classes.tab} 
              component={Link} 
              to={route.link} 
              label={route.name} 
              onMouseOver={route.onMouseOver? route.onMouseOver : undefined}
            />
            )
        })}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Free Estimate
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeHandler}
        MenuListProps={{ onMouseLeave: closeHandler }}
        classes={{paper: classes.menu}}
        style={{zIndex: 1302}}
      >
        {MenuItemComponent()}
      </Menu>
    </React.Fragment>
  )

  useEffect(() => {
    [...routes, ...itemList].forEach((route)=>{
      switch(window.location.pathname){
        case `${route.link}`:
          if(value !== route.activedIndex){
            setValue(route.activedIndex);
            if(route.itemSelectedIndex && route.itemSelectedIndex === selectedItem){
              setSelectedItem(route.itemSelectedIndex);
            }
          }
          break;
      }
    })
  }, [value, itemList, selectedItem, setSelectedItem, setValue, routes]);

  return (
    <React.Fragment>
      {/* <HideOnScroll> */}
        <AppBar className={classes.appbar}>
          <Toolbar className="primary" disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              disableRipple
            >
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            {mathes ? drawer : tabs}
          </Toolbar>
        </AppBar>
      {/* </HideOnScroll> */}
      
      <div className={classes.toolbarMargin} />
      <Typography variant="body1">
        {[...new Array(50)]
          .map(
            () =>
              `Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Typography>
       
    </React.Fragment>
  );
};

export default Header;
