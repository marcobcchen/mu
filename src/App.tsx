import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import theme from "./components/ui/theme";
import { Typography } from "@material-ui/core";

import LandingPage from './pages/LandingPage'

function App() {
  const [value, setValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <Switch>
          <Route exact path="/" component={()=> <LandingPage />} />
          <Route path="/services" component={()=> <div><Typography>Services</Typography></div>} />
          <Route path="/revolution" component={()=> <div><Typography>Revolution</Typography></div>} />
          <Route path="/about" component={()=> <div><Typography>About Us</Typography></div>} />
          <Route path="/contact" component={()=> <div><Typography>Contact Us</Typography></div>} />
          <Route path="/software" component={()=> <div><Typography>Software</Typography></div>} />
          <Route path="/mobile" component={()=> <div><Typography>Mobile</Typography></div>} />
          <Route path="/website" component={()=> <div><Typography>Website</Typography></div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;