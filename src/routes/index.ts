import {Router, Request, Response} from 'express'

const router= Router() //Permite crear rutas 

router.get('/', (req: Request, res: Response)=>{
    res.render('partials/index.hbs') //Haciendo referencia a el index.hbs de la carpeta partials
})

router.get('/ta', (req: Request, res: Response)=>{
    res.send('Receivede')
})

export default router