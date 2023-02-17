const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
// app.use('/api/user',require('./router/userrouter'));
app.use("/api/product", require("./router/productrouter"));
const Connectdb = require("./config/db");


const {errorHandler}=require('./middleware/errorMiddleware')

Connectdb();

app.use(errorHandler);
app.get("/", (req, res) => {
  res.status(200).json({ message: "get data" });
});
app.use("/api/product", require("./router/productrouter"));
app.listen(port, () => {
  console.log(port);
});


// app.get('/',(req,res)=>{z
//     res.send("file txt")
// });
// //
// app.listen(port,()=>{
//     console.log("successfully")
// })

// app.use('/api/users', require('./router/userrouter'))
 