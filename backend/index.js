const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')

require('./conn');

const app=express();
dotenv.config()

const port=process.env.PORT || 3001


app.use(cors());

app.use(express.json())
app.use('/api/auth',require('./routes/User'))
app.use('/api/note',require('./routes/Notes'))



app.listen(port,()=>{
console.log('connected at port ',port);
})