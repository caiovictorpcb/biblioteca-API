import express from 'express'
import indexRouter from './routes/main'

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter)

app.use('/create', indexRouter)

app.use('/read', indexRouter)

app.use('/read/:livroID', indexRouter)
  
app.use('/update', indexRouter)

app.use('/delete', indexRouter)

app.use('/xesque', indexRouter)

app.listen(30001, () => {
  console.log("Rodando em http://localhost:30001")
})

export default app;
