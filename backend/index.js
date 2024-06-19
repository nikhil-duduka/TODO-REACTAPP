const  express = require('express');
const { createtodo, updatetodo } = require('./types');
const app = express();
const  {todo} = require('./db');
const cors  = require('cors');

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res){
    const payload = req.body;
    const parsedPayLoad = createtodo.safeParse(payload);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "wrong inputs"
        })
        return;
    };

    await todo.create({
        title : payload.title , 
        description : payload.description ,
        completed  : false
    });

    res.json({
        msg: "todo created"
    });
})

app.get("/todos", async function(req,res){
    const data  = await todo.find({});
    res.json({
        data
    })
    
})

app.put("/completed", async function(req,res){
    const validation = req.body;
    const updatePayLoad = updatetodo.safeParse(validation)
    if(!updatePayLoad.success){
        res.status(411).json({
            msg : "wrong inputs"
        })
        return;
    };
    // put it in mongodb
    await todo.update({_id : req.body.id} , {completed : true})
    res.json({
        msg : "marked as completed"
    });
})

app.listen(3000,()=>console.log("listening....."));

