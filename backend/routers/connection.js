const mongoose =require('mongoose');
const  databaseName="Harsh2001"
const url=`mongodb+srv://harsh2001:aman@cluster0.vlbo7fg.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

//connect to database
//async function - returns A promise
mongoose.connect(url)
.then((result)=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
});
module.exports=mongoose

//1.Asynchronous--simultaneously
//2.Synchronous--one by one


