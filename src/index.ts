import express, { urlencoded } from 'express';
import type { Request,Response } from 'express';
import router from './routes/url.routes';
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"))

app.get('/health',(req:Request,res:Response)=>{
    res.send("server is working fine");
});
app.use(router);

app.listen(PORT,()=>{
    console.log(`server is running AT port ${PORT}`);
})