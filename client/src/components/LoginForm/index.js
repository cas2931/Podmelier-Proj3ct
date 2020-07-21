import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"; 
// import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
    state= {
      email:'', 
      password:''
    } 
  
    handleLogin = async () => {
      const {email,password} =this.state
  const{data}= await Axios.post('/api/auth/login',{email,password})   
  this.props.history.push('/user')
  // const res= await Axios.get('/api/auth/',) 
// console.log(res.data)
    }   
  
    handleChange=(e) => { 
      this.setState({[e.target.name]:e.target.value})
    }
  
    render() {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignContent="center"
          alignItems="flex-start"
          justify="middle"
          style={{ minHeight: "auto" }}
        >
          <Typography
            component="h1"
            variant="h5"
            color="secondary"
            align="center"
          >
            Login
          </Typography> 
          
            <TextField
              style={{ backgroundColor: "white" }}
              margin="normal"
              name="email"
              label="Email"
              variant="filled"
              type="text" 
              fullWidth='true'  
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              style={{ backgroundColor: "white" }}
              margin="normal"
              name="password"
              label="Password"
              type="text"
              variant="filled" 
              fullWidth='true' 
              value={this.state.password} 
              onChange={this.handleChange}
              
            />
            <Button onClick={this.handleLogin} variant="contained" color="secondary">
              Login
            </Button>
      
        </Grid>
      );
    }  
  }
export default withRouter(LoginForm);
