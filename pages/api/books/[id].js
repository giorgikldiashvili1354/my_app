import Book from "../../../models/Book"

export default async function editBook(req,res){
    try{
        if(req.method == 'PUT'){
            const {id,
                author,
                image, 
                genre,
                rate, 
                title }=req.body
                const updateBook = await Book.findOneUpdate({_id:id,},{ author,
                    image, 
                    genre,
                    rate, 
                    title
                })
                res.status(200).json({
                    status:"success",
                    data: {
                        updateBook,
                    },
                });
            }

    }catch(err){
        console.log(err)
        res.status(500).json({message:'internal Server Err'})
    }
}