

import {  useContext, useEffect } from 'react'
import ItemContext from '../Context/ItemContext';
import BookListPage from '../component/BookListPage';



export default function Home() {
  const ctx = useContext(ItemContext)
  const getBooks = async () => {
    try{
      const res = await fetch('http://localhost:3000/api/books').then((res) => 
      res.json());
      console.log(res);

      ctx.setBooks(res.books);
      ctx.setfilteredArr(res.books)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    ctx.books.length == 0  && getBooks();
  },[])
  return (
    <div>
     
      {ctx.books.length > 0 ?
    <BookListPage/> : <div className="flex gap-4 p-4 flex-wrap justify-center mt-56">
    <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon"/>
</div>}
    </div>
  )
}