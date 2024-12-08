import Book from "../../../models/Book";
import connectMongo from "../../../utils/connectMongo";

export default async function bookHandler(req, res){
    try{
        connectMongo();
        if(req.method == "GET"){
            const books = await Book.find({});
            res.status(200).json({books:books});
        }

        if(req.method == 'POST'){
            const {
                id,
                author,
                image, 
                genre,
                rate, 
                title 
            }= req.body
            const newBook = Book.create({
                id,
                author,
                image, 
                genre,
                rate, 
                title 
            })
            res.status(201).json({
                status:"Success",
                message:"Data was succesfully created",
                book:newBook

            })
        }
        

    }catch(error){
        console.error();
        res.status(500).json({error:'Internal Server Error'})
    }
}