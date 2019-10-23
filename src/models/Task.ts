import mongoose, { Schema, model } from 'mongoose'

//Trabajar con los datos
const TaskSchema= new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    description:{
        type: String,
        required: false,
        lowercase: true
    }
})

export default model('Task', TaskSchema)