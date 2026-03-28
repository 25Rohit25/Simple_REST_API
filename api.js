const express = require('express');
const app = express();
 app.use(express.json());

 let users = [];

 //GET ALL USERS
 app.get('/users',(req,res) => {
    res.json(users);
 });

 //get user by  id 

 app.get('/users/:id',(req,res) =>{
    const newUser ={

    id: users.length +1,
    ...req.body
    };
    users.push(newUser);
    res.json(newUser);
 });

 //post user

 app.post('/users', (req, res) => {
    res.json({
       // message: "user created succesfully",
        data: req.body
    })
});

 //update user
 app.put('/users/:id',(req,res) =>{
    users = users.map(u =>
        u.id == req.params.id ? { ...u, ...req,body} : u
    );
    res.json({ message: "Updated"});
 });

 //deleted user

 app.delete('/users/:id',(req,res) =>{
    users = users.filter(u => u.id != req.params.id);
    res.json({message:'Deleted'});
 });

 app.listen(3000, () => {
    console.log("Server running port 3000");
 });