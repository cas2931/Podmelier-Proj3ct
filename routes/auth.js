const passport = require('passport')
const router = require('express').Router() 
router.get('/',isLoggedIn,(req,res)=>{
    console.log("req user",req.user);
    res.send('*',{
        user : req.user
    });
}); 

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/user', // redirect to the secure profile section
    failureRedirect : '*', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
})); 

router.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/user",
      failureRedirect: "*",
      failureFlash: true,
    })
  )   
  function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('*');
    }  

  module.exports = router