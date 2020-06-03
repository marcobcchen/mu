import React from 'react'
import { AppBar, Toolbar, Typography, Grid, Paper } from '@material-ui/core/'

const props = () => {
  const style = {
    Paper: {
      padding: 10,
      marginTop: 10
    }
  }

  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1" color='error'>
            h2. Heading
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={style.Paper}>left</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={style.Paper}>center</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={style.Paper}>right</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default props