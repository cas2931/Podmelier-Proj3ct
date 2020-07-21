
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";

class SignupForm extends React.Component { 
  state= {
    email:'', 
    password:''
  } 

  handleSignUp = async () => {
    const {email,password} =this.state
const{data}= await Axios.post('/api/auth/signup',{email,password}) 
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
          Sign Up
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
          <Button onClick={this.handleSignUp} variant="contained" color="secondary">
            Sign Up
          </Button>
    
      </Grid>
    );
  }  
}
export default SignupForm;
