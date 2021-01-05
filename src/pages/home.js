import React from 'react'
import Searcbar from "../components/searchinput"
import Lottie from "react-lottie";
import animationData from "./lottie.json";
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"


const Home=(props)=> {

  const defaultOptions = {
    loop: true,
  
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


    return (
        <div >
   <Grid container justify="center" direction="column" style={{width:"100%",textAlign:"center"}}>
     <h3>Welcome Apartment Management app</h3>
     <p>Görsel Programlama Orkun Mert Yiğit 1915101001</p>
           <Lottie
            style={{zIndex:-1}}
            options={defaultOptions}
            height={400}
            width={400}
        
          />
<Grid container row justify="center" >
  <Link to="login">
  <Button variant="contained" color="primary">User login</Button>
  </Link>
  <Link to="/admin-login" style={{marginLeft:20}}>
  <Button variant="contained" color="secondary">Admin Login</Button>
  </Link>
</Grid>

          </Grid>
        </div>
    )
}

export default Home