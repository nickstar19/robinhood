const User = require('../model/User.js')

const signup = async (req, res) => {
    console.log(req.body);
    const {
        memberName,
        memberEmail,
        password,
        confirmPassword,
        addedStatus
    } = req.body;
    try {
        const user = await User.create({
            memberName,
            memberEmail,
            password,
            confirmPassword,
            addedStatus
        });
        if (!user) {
            return res.status(400).json({ error: 'Could not create user' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'An error occured' })
    }
}

const signin = async (req, res) => {
    const {
        memberEmail,
        password
    } = req.body;
    try {
        const user = await User.findOne({ memberEmail: memberEmail });
        //console.log(user);
        if (!user)
            return res.status(400).json({ error: 'User not found' })

        const match = password === user.password;
        if (!match)
            return res.status(400).json({ error: 'Wrong password' });

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'An error occured' });
    }
}

module.exports = { signup,signin };