
import { generateAuthToken } from '../helpers/index.js';
import { deleteUserById, getUsers, getUserById ,getUserByEmail } from '../mongodb/models/user.js';


export const getAllUsers = async (req, res) => {
    try {
      const users = await getUsers();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await getUserById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };

  export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteUserById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }


  export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      // const { email, name, gender, DOB, image, issues } = req.body;
     const { plantSpecies } = req.body;
      if (!id){
        return res.sendStatus(400);
      }
  
      const user = await getUserById(id);
  
      if (!user) {
        return res.sendStatus(404);
      }
  
      // user.email = email;
      // user.name = name;
      // user.gender = gender;
      // user.DOB = DOB;
      // user.image = image;
      user.plantSpecies = plantSpecies;
  
      await user.save();
  
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const getuserByEmailAuth = async (req, res) => {
    try {
      const { email } = req.params;
      const user = await getUserByEmail(email);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const token = await generateAuthToken(user._id);
  
      return res.json({user , token});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };


  export const getuserByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const user = await getUserByEmail(email);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };