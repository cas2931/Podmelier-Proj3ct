const router = require('express').Router() 
const authRoutes= require('./auth')

router.use('/auth',authRoutes) 

    // app.get('/',isLoggedIn,(req,res)=>{
    //     console.log("req user",req.user);
    //     res.send('*',{
    //         user : req.user
    //     });
    // });

   
    // app.get('/logout', function(req, res) {
    //     req.logout();
    //     res.redirect('*');
    // });

    //     // route middleware to make sure a user is logged in
    // function isLoggedIn(req, res, next) {

    //     // if user is authenticated in the session, carry on 
    //     if (req.isAuthenticated())
    //         return next();

    //     // if they aren't redirect them to the home page
    //     res.redirect('*');
    // }  

//LOGIN

  
  
module.exports = router