import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';  

class LoginForm extends React.Component {  
   handleLogin = () => {  
  //    
}  

render() {  
   return (  
      <Grid  
      container  
      spacing={0}  
      direction="column"  
      alignContent='center'   
      alignItems="flex-start"  
      justify="middle"  
      style={{ minHeight: 'auto' }}  
         >  
   <Typography component="h1" variant="h5" color='secondary' align='inherit'>  
      Log In (New & Existing Members) 
   </Typography>  
   <form onSubmit={this.handleLogin}>  
   <TextField 
     id="email"
     label="Email"
     variant="filled" 
     type="text"
   />  
   <TextField    
    id="standard-password-input"
    label="Password"
    type="password"   
    variant="filled"  
   />  
   <Button  
      type="submit"    
      variant="contained"  
      color="secondary"  
      >  
      Log In 
      </Button>  
   </form>  
  </Grid>  
  );  
 }    
}  
export default LoginForm;