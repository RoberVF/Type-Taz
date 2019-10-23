import {Router, Request, Response} from 'express'

const router= Router()

//Model
import Task from '../models/Task'

//En las rutas del archivo app.ts le especificas que todas las rutas escritas en este file, llevaran de prefijo /tasks
router.route('/create') 
    .get((req: Request, res: Response)=>{
        res.render('tasks/create')
    })
    .post(async (req: Request, res: Response)=>{
        const {title, description} = req.body
        const newTask= new Task({title, description})
        await newTask.save()
        res.redirect('/tasks/list') //Redirecciona a la pagina /tasks/list tras crear la tarea
    })

router.route('/list') 
    .get(async(req: Request, res: Response)=>{
        const tasks= await Task.find()
        res.render('tasks/list', {tasks: tasks})
    })

router.route('/delete/:id')
    .get(async (req: Request, res: Response)=>{
        const {id}= req.params // En req.params se encuentra el id del elemento
        await Task.findByIdAndDelete(id)  //Asi se elimina el id ya que esta almacenado en la constante {id}
        res.redirect('/tasks/list')
        
    })

router.route('/edit/:id')
    .get(async(req: Request, res: Response)=>{
        const {id}= req.params
        const task= await Task.findById(id) //Igual que con delete, pero aqui solo buscas, en delete buscas y eliminas
        console.log(task)
        res.render('tasks/edit', {task: task})
    })
    .post(async(req: Request, res:Response)=>{
        const {id}= req.params
        const {title, description}= req.body
        await Task.findByIdAndUpdate(id, {title, description}) //id-> Dato a actualizar. Lista-> Lo que se quiere actualizar de ese dato
        res.redirect('/tasks/list')
    })

export default router