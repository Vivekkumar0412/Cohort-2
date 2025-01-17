const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
app.get("/notification",(req,res)=>{
    let data = {
        message : Math.floor(Math.random() * 200),
        jobs : Math.floor(Math.random() * 200),
        notification : Math.floor(Math.random() * 200),
        profile : Math.floor(Math.random() * 200),
    };
    try {
        res.status(200).json({data : data})
    } catch (error) {
        res.status(400).json({msg : "some error occured at backedn"})
    }
});

app.listen(5500,()=>{
    console.log(`backend is live at port 5500`)
})