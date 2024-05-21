const { response } = require('express');
const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try {
        //console.log(req.body.email);
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: "unable to create user",
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {create};