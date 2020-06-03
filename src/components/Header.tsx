import React, { useState, useEffect } from 'react'
import { Paper, Tabs, Tab, Grid, Card, CardContent, Typography } from '@material-ui/core/'
import { store } from './store'
import { IUsers } from './IHeader'

interface IProps{
  id: number
  headerHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Header = (props: IProps) => {
  const [value, setValue] = useState(0)
  const [apiUrl, setApiUrl] = useState(1)
  const [users, setUsers] = useState<IUsers>()
  console.log(props.id)

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue)
    setValue(newValue)
    setApiUrl(newValue + 1)
  }

  useEffect(() => {
    async function fetchData(){
      fetch('https://reqres.in/api/users?page=' + apiUrl)
      .then(responsive => responsive.json())
      .then((jsonData) => {
        console.log('res:', jsonData)

        setUsers(jsonData)
      })
    }
    fetchData();
  }, [apiUrl])

  const usersComponent = () => {
    if(users){
      return (
        users.data.map((item) => {
          return (
            <Grid item xs={2} md={3} key={item.first_name}>
              {/* <Paper>{item.first_name}</Paper> */}
              <Card >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                  {item.first_name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            )
        })
      )
    }else{
      return null
    }
  }

  return(
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        onClick={props.headerHandler}
        variant='fullWidth'
        aria-label="disabled tabs example"
      >
        {
          store.map(item => 
            <Tab key={item} label={item} />
          )
        }
        {/* <Tab label="Active" /> */}
        {/* <Tab label="Disabled" /> */}
        {/* <Tab label="Active" /> */}
      </Tabs>
      <Grid container spacing={4}>
        {usersComponent()}
      </Grid>
      
    </Paper>
  )
}

export default Header