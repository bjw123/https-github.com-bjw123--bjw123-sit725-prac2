const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

//basic endpoint
app.get('/', function (req, res){
    var username=req.query.username;

    console.log("live");


    res.send("hello"+ username);
})

//working
let addition = function(num1,num2){
    let result = num1 + num2;
    return  result;
}

app.get('/adder', function (req,res){
    let num1=parseInt(req.query.num1)
    let sum=addition(6,6)
    res.send("result:  " + sum);



})

let accounts =[
    {id:1, name:"alex", deposit:5},
    {id:2, name:"sarah", deposit:5},
    {id:3, name:"jim", deposit:15},
]

let search = function(name){
    var result;
    for (i = 0; i < accounts.length; i++) {
        if(accounts[i].name = name){
            result = [i]
        }
    }
    return  result;
}

//working
app.get('/array', function (req,res){
    let index = search("jim")
    res.send(accounts[index])

})

app.listen(3000)
console.log("local host 3000");