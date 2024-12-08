import mongoose, { Schema } from "mongoose"




const bookSchema = new Schema({

    id:{type:String, unique:true, required:true},
    author :String,
    image : String,
    genre :String,
    rate : String,
    title : String
});

mongoose.models = {};
let Book;
if (mongoose.model.Books) Book = mongoose.model.Books;
else Book = mongoose.model("Books", bookSchema);

export default Book;