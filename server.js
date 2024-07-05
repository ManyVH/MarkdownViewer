import express from 'express'
import path from 'path'
import { fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/view', function (req, res) {
    res.render('pad')
    
})

const port = 3000

app.listen(port)
