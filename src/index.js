const express =require('express');
const app = express()
const cors = require('cors');
const cookieParser = require("cookie-parser");
const apiRoutes = require('./routes');
const {ServerConfig,DataBaseConfig } = require('./config');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
DataBaseConfig.connect();
app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT ,()=>{
    
    console.log(`Server Started at port -> ${ServerConfig.PORT}`);
})
