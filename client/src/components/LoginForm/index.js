import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';  
// import amber from '@material-ui/core/colors/amber';   

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
         alignItems="flex-start"  
         justify="middle"  
         style={{ minHeight: 'auto' }}  
         >  
   <Typography component="h1" variant="h5" color='primary'>  
      Log In  
   </Typography>  
   <form onSubmit={this.handleLogin}>  
   <TextField 
      id="outlined-basic"
      variant="standard"  
      margin="normal"  
      fullWidth  
      label="Email Address"  
   />  
   <TextField   
      id="outlined-basic"
      variant="standard"  
      margin="normal"  
      fullWidth  
      label="Password"  
      type="password"  
      color='primary' 
   />  
   <Button  
      type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"  
      >  
      Log In  
      </Button>  
   </form>  
  </Grid>  
  );  
 }    
}  
export default LoginForm;