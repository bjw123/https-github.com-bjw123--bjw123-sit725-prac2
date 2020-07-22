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

// a linked list does not seem to be built into JS, according to a source this is because JS has heavily optimised the array in Javascript
/*
you would want to use a linked list in certain situations because in theory it is less expensive with certain operations such as adding to the data structure.
considering the nature of an accounts array it will not be using direct indexing to fetch data it will instead iterate through the data structure and use an if  condition
to find the user, arrays are a lot more efficient than linked lists when referring to a specific index e.g. array[72] as a linked list must search from the start, since it is a web app it is likely
the user base may increase drastically and there may be many add and delete operations it is more efficient to use a linked list as there may be many add and delete operations
*/
//code referenced from: https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
class ListNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}

let node1 = new ListNode({id:1, name:"alex", deposit:5});
let node2 = new ListNode({id:2, name:"sarah", deposit:5});
let node3 = new ListNode({id:3, name:"jim", deposit:15});
node1.next = node2;
node2.next = node3;
let list = new LinkedList(node1);
app.get('/linkedList', function (req,res){
    res.send(list)

})

app.listen(3000)
console.log("local host 3000");