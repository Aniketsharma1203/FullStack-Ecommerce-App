import Users from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

export const handleUserSignup = async (req, res) => {
    const { name, email, password, role } = req.body;
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: "Username already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name,
            email,
            password: hashedPassword,
            role
        })
        res.send("Signed Up Successfully.")
    } catch (error) {
        console.log(error);
    }
};

export const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        res.status(200).json({
            message: "Login successful",
            token: token,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            message: "Internal server error. Please try again later."
        });
    }
};