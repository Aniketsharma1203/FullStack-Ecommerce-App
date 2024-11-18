import Users from "../models/user.js";

export const getUserRole = async(req, res) => {
    const User = await Users.find({_id:req.body.userId});
    if(User) res.status(200).send(User[0]);
};