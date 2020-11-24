import React from 'react'
import Lottie from 'react-lottie'
import { Grid, Button, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import ButtonArrow from '../components/ui/ButtonArrow'
import theme from '../components/ui/theme'

const useStyles = makeStyles(theme => ({
  estimateButton: {
    background: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      background: theme.palette.secondary.light,
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    ...theme.custom.learnButton,
    fontSize: '0.9em',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.custom.learnButton,
    fontSize: '0.7em',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('xs')]:{
      marginBottom: '2em'
    }
  },
  mainContainer: {
    marginTop: '5em'
  },
  heroTextContainer: {
    minWidth: '22em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]:{
      marginLeft: 0
    }
  },
  specialText: {
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]:{
      marginLeft: 0
    }
  },
  serivceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('xs')]:{
      padding: 25
    }
  }
}))

const animation = {
  maxWidth: '50em',
  minWidth: '20em',
  marginTop: '2em',
  // marginLeft: '10%'
}

const LandingPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return(
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align='center' variant='h2'>
              Bringing West Coast Technology<br />to them Midwest
            </Typography>
            <Grid container justify='center' className={classes.buttonContainer} >
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnButtonHero} >
                  <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item>
            <Lottie style={animation} options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      {/* Serivce Block */}
      <Grid item>
        <Grid container direction='row' justify={matchesSM ? 'center' : undefined} className={classes.serivceContainer}>
          <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
            <Typography variant='h4'>
              Custom Software Development
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant='outlined' className={classes.learnButton} >
              <span style={{marginRight: 10}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={customSoftwareIcon} alt='custom software icon' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
  )
}

export default LandingPage