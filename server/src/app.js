const express = require ('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express() 


app.set('port', process.env.PORT || 3000);

app.use(cors());    
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : false }));


const classesrouter = require('./routes/classes.routes');
app.use("/api/classes" , classesrouter)


const evaluationrouter = require('./routes/evaluation.routes')
app.use("/api/evaluation" , evaluationrouter)


const gradesrouter = require('./routes/grades.routes')
app.use("/api/grades", gradesrouter)

module.exports = app;
