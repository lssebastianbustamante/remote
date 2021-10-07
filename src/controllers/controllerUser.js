const path = require('path'); 
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator');


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
    },
    create: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let user = {
                nombre: req.body.first_name,
                apellido: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file ? req.file.filename : '',
                role: 1
            }
            let fileUsers = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
                encoding: 'utf-8'
            });
            let users;
            if (fileUsers == "") {
                users = [];
            } else {
                users = JSON.parse(fileUsers);
            };
    
            users.push(user);
            usersJSON = JSON.stringify(users, null, 2);
            fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersJSON);
            res.redirect('/user/login');
    
        } else {
            return res.render(path.resolve(__dirname, '../views/user/register'), {
                title: 'Registro',
                errors: errors.errors, 
                old: req.body
            });
        }
       
    }


}