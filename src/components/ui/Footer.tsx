import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Hidden } from '@material-ui/core'

import { IApp } from './IApp'

import footerAdornment from '../../assets/Footer Adornment.svg'
import iconFacebook from '../../assets/facebook.svg'
import iconInstagram from '../../assets/instagram.svg'
import iconTwitter from '../../assets/twitter.svg'

const useStyles = makeStyles(theme => ({
  footer: {
    background: theme.palette.common.blue,
    width: '100%',
    zIndex: theme.zIndex.modal + 2,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('sm')]: {
      width: '20em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    width: '3em',
    height: '3em',
    [theme.breakpoints.down('xs')]: {
      width: '2em',
      height: '2em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-5em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.5em',
    },
  },
}))

const Footer = (props: IApp) => {
  const classes = useStyles();
  const {setValue, setSelectedItem} = props

  return(
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/' onClick={() => setValue(0)} className={classes.link}><Typography>Home</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/services' onClick={() => {setValue(1); setSelectedItem(0);}} className={classes.link}><Typography>Services</Typography></Grid>
              <Grid item component={Link} to='/software' onClick={() => {setValue(1); setSelectedItem(1);}} className={classes.link}><Typography>Software Development</Typography></Grid>
              <Grid item component={Link} to='/mobile' onClick={() => {setValue(1); setSelectedItem(2);}} className={classes.link}><Typography>Mobile Development</Typography></Grid>
              <Grid item component={Link} to='/website' onClick={() => {setValue(1); setSelectedItem(3);}} className={classes.link}><Typography>Website Development</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}><Typography>The Revolution</Typography></Grid>
              <Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}><Typography>Vision</Typography></Grid>
              <Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}><Typography>Technology</Typography></Grid>
              <Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}><Typography>Process</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}><Typography>About Us</Typography></Grid>
              <Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}><Typography>History</Typography></Grid>
              <Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}><Typography>Team</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/contact' onClick={() => setValue(4)} className={classes.link}><Typography>Contact Us</Typography></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerAdornment} alt='black decorative slash' className={classes.adornment} />

      <Grid container justify='flex-end' spacing={2} className={classes.socialContainer}>
        <Grid item component={'a'} href='http://www.facebook.com' rel='noopener noreferrer' target='_blank'>
          <img src={iconFacebook} alt='facebook' className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href='http://www.instagram.com' rel='noopener noreferrer' target='_blank'>
          <img src={iconInstagram} alt='instagram' className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href='http://www.twitter.com' rel='noopener noreferrer' target='_blank'>
          <img src={iconTwitter} alt='twitter' className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer