const User = require("../model/User");


// create user
exports.signup = async(req,res) =>{
    try {
        const user = await User.findOne({email: req.body.email})

        if(user){
            return res.status(400).json({message: 'user already exist.'});
        }
        const newUser = await User.create(req.body);

        if(!newUser){
            return res.status(400).json({message: 'User creation error.'});
        }

        return res.status(200).json({ message: 'User added successful.'});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// sign in user
exports.signin = async(req,res) =>{
    try {
        const user = await User.findOne({email: req.body.email})

        if(!user){
            return res.status(400).json({message: 'Invalid user/email'});
        }

        if(req.body.password !== user.password){
            return res.status(400).json({message: 'Invalid password'});
        }


        return res.status(200).json({user:user, message: 'SignIn successful.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// get all users
exports.allUser = async(req,res) =>{
    try {
        const users = await User.find()
        if(users.length == 0){
            return res.status(400).json({message: 'user not found...'});
        }
        return res.status(200).json({users:users, message: 'User found successfully...'});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// delete user
exports.deleteUser = async(req,res) =>{
    try{
        const user = await User.findByIdAndDelete({"_id": req.params.id})

        if(!user){
            return res.status(400).json({message: 'Error deleting todo.'});
        }
        return res.status(200).json({message: 'User deleted successfully.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}