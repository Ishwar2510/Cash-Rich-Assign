const express = require("express");
const router = new express.Router();
const User = require("../models/userSchema");
// const authenicate = require("../middleware/authenticate");
const bcrypt = require("bcryptjs");

// register the data

router.post("/register", async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: " ishwar fill all  details" });
        
    };
    try {
        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "ishwar This email  already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: " ishwar password dosent match" });;
        } else {

            const finaluser = new User({
                fname, email, mobile, password, cpassword
            });

            // Hashing to be done here
            const storedata = await finaluser.save();
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log(error)
        res.status(422).send(error);
    }

});


router.post("/login", async (req, res) => {
   
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "ishwar fill the details" });
    }
    try {
        const userlogin = await User.findOne({ email: email });
       
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            
            if (!isMatch) {
                res.status(400).json({ error: "ishwar invalid crediential pass" });
            } else {
                userlogin.loggedin=true;
                await userlogin.save()
                res.status(201).json(userlogin);
            }
        } else {
            res.status(400).json({ error: "ishwar user does not exist" });
        }
    } catch (error) { 
        console.log(error)
        res.status(400).json({ error: " ishwar invalid crediential pass" });
    }
});

// for userlogout

router.get("/logout/:email",  async (req, res) => {
    const {email} = req.params
    try {
        const userlogin = await User.findOne({ email: email });
        userlogin.loggedin=false
        await userlogin.save()
        res.status(200).send("successfully logged off")
    } catch (error) {
        console.log(error)
        res.status(400).send(`error from logout`)
    }
});

// get uer data
router.get("/userdetails/:email", async (req, res) => {
    const {email} = req.params
    try {
        const user = await User.findOne({ email:email});
        res.status(201).json(user);
    } catch (error) {
        console.log(error)
        res.status(401).send("error from cart details")
    }
});
module.exports = router;