import mongoose from "mongoose";
const Schema = mongoose.Schema

const student = new Schema({
    // userdata
    q1:{
        type:String,
        Required:true
    },
    q2 :{
        type:String,
        Required:true
    },
    q3:{
        type:String,
        Required:true
    },
    q4:{
        type:String,
        Required:true
    },
    q5:{
        type:String,
        Required:true
    },

})
export default mongoose.model('Ndp',student)