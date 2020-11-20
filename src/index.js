const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/',(req,res)=>{
    res.status(200).send('Hello world!');
})


app.patch('/add',(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    result=num1+num2;
    res.send({status: "success",message: result<-1000000?"Underflow":result>1000000?"Overflow":"the sum of given two numbers",sum:result});
})

app.patch('/sub',(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    result=num1-num2;
    res.send({status: "success",message: result<-1000000?"Underflow":result>1000000?"Overflow":"the sum of given two numbers",sum:result});
})

app.patch('/multiply',(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    result=num1*num2;
    res.send({status: "success",message: result<-1000000?"Underflow":result>1000000?"Overflow":"The product of given numbers",sum:result});
})

app.patch('/divide',(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    result=num1/num2;
    res.send({status: num2===0?"error":"success",message: num2===0?"Cannot divide by zero":"The division of given numbers",sum:result});
})




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
