const user = require('../models/user');
exports.signup = async (req, res) => {
    const body = req.body;
    console.log(body);
    if (!['user'].includes(body.usertype)) {
        return res.status(400).json({ message: "invalid user type" });
    }

    try {
        const usersignup = await user.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
            usertype: body.usertype
        });

        return res.status(200).json({ message: "user created successfully", data: usersignup });
    } catch (error) {
        return res.status(400).json({ message: "user creation failed", error: error.message });
    }
}
