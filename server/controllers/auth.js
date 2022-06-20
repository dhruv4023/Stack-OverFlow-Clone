import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'
export const signup = async (req, res) => {
    const { name, email, password, age } = req.body;
    // console.log(req.body)
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            // console.log("existingUser")
            return res.status(500).json({ message: "User already Exist."})
        }
        const hashPassword = await bcrypt.hash(password, 12)
        // const newUser = await users.create({ name, email, password })
        const newUser = await users.create({ name, email, password: hashPassword, age })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ result: newUser, token })
    } catch (err) {
        res.status(500).json({mess:"something wents wrong . . ."})
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });

        if (!existinguser) {
            return res.status(404).json({ message: "User don't Exist." })
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result: existinguser, token })
    } catch (err) {
        res.status(500).json("something wents wrong . . .")
    }
}
