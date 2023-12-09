const UserModel = require('../model/tourist')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');


  exports.deleteAccount = async (req, res, next) => {
    const userId = req.user.user_id; 
  
    try {
      const user = await UserModel.findById(userId);
  
      if (!user) {
        throw createHttpError(404, 'User not found');
      }
  
      // You might want to add some additional checks here, e.g., asking for confirmation
  
      // Delete the user account
      await UserModel.deleteOne({ _id: userId });
  
      res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  
 
exports.updateUser = async (req, res, next) => {
    console.log('Received a PUT request to /api/v1/tourist/update');
    const userId = req.user.user_id; // Assuming you have a user ID in the request, like from a JWT token
    const newData = req.body;
  
    try {
      const user = await UserModel.findById(userId);
  
      if (!user) {
        throw createHttpError(400, 'User not found');
      }
      
      
      if (newData.fullname) user.fullname = newData.fullname;
      if (newData.email) user.email = newData.email;
      if (newData.telephone) user.telephone = newData.telephone;
      if (newData.username) user.username = newData.username;
      if (newData.password) {
        const hashedPassword = await bcrypt.hash(newData.password, 10);
        user.password = hashedPassword;
      }
  
      const result = await user.save();
  
      // Respond with the updated user data or a success message
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
  

exports.register = async (req, res, next) => {
    console.log(req.body.name);  

    const name = req.body.name
    const country = req.body.country    
    const email = req.body.email
    const telephone = req.body.telephone
    const username = req.body.username
    const password = req.body.password


    try {
        
        if (!name ||!country || !email || !telephone || !username || !password) {
            console.log(req.body.email); 
            throw createHttpError(400, 'Missing required parameters')
        }

        const isUserAvailable = await UserModel.findOne({ username: username }).exec();

        if (isUserAvailable) {
            throw createHttpError(400, 'User already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            name: name,
            country : country,
            email: email,
            telephone: telephone,
            username: username,
            password: hashedPassword
        })

        const result = await user.save();

        res.status(201).send(result);


    } catch (error) {
        next(error)

    }


}

