import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name: String,
    sid: String,
})

const Model = mongoose.model('Model',modelSchema);

function inserInfo(name, sid) {
  
    const newQuiz = new Model({
      name: name,
      sid: sid,
    });
    return newQuiz.save();
  }
export {Model,inserInfo};