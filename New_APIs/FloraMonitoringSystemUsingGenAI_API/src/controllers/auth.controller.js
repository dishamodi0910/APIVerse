import { getUserByEmail, createUser } from '../mongodb/models/user.js';
import { generateAuthToken } from '../helpers/index.js';
import { uploadOnCloudinary } from '../utlils/cloudinary.js';

export const register = async(req, res) => {
    try {
        console.log(req.body);
        const { email, name, plantSpecies } = req.body;
        const { path } = req.file;

        if (!email || !name || !plantSpecies) {
            return res.sendStatus(400);
        }

        const userExists = await getUserByEmail(email);

        if (userExists) {
            return res.status(409).send('Email already exists');
        }

        const imageURL = await uploadOnCloudinary(path);
        const image = imageURL.secure_url;

        const newUser = await createUser({
            email: email,
            name: name,
            image: image,
            plantSpecies: plantSpecies
        });

        const token = await generateAuthToken(newUser._id);
        console.log(token);
        return res.status(200).json({ newUser, token }).end();

    } catch (e) {
        console.log(e);
        res.status(500).send('Server error');
    }
}