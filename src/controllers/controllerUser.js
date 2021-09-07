const path = require('path'); 
const fs = require('fs');

module.exports = {
    login: (req,res) => {
        res.render(path.resolve(__dirname, '../views/user/login'), {
            title: 'Login'
        })
    },
    register: (req,res) => {
        res.render(path.resolve(__dirname, '../views/user/register'), {
            title: 'Registro'
        })
    } 
}