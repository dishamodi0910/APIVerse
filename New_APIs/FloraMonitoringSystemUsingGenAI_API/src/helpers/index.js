import  jwt  from "jsonwebtoken";


export const generateAuthToken = async (id) => {
    try {
      const token = await jwt.sign(
        {
          _id: id,
        },
        process.env.AUTH_SECRET
      );
      return token;
    } catch (error) {
      console.log(error);
    }
}