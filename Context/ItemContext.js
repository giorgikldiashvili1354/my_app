import { createContext, useState } from "react";

export const ItemContext = createContext({
    books:[],
    setBooks:() => {},
    admin: false,
    setIsAdmin: () => {},
    filteredArr: [],
    setfilteredArr:() => {},
    page:1,
    setPage:() => {}
})

export const ItemContextProvider = (props) => {
    const [books, setBooks] = useState([])
    const[filteredArr, setfilteredArr] = useState([])
    const[page, setPage] = useState(1);
    const[admin, setIsAdmin] = useState(false)

    const changeBooks = (books) => {
        setBooks(books)
    }

    const changeAdmin = (admin) => {
        setIsAdmin(admin)
    }

    const changefilteredArr = (filteredArr) => {
        setfilteredArr(filteredArr)
    }
    const changePage = (page) => {
        setPage(page)
    }


    return(
        <ItemContext.Provider
        value={{
            books: books,  
            setBooks: changeBooks,
            admin:admin,
            setIsAdmin:changeAdmin,
            filteredArr: filteredArr,
            setfilteredArr: changefilteredArr,
            page: page,
            setPage: changePage
        }}>
            {props.children}
        </ItemContext.Provider>
    );
    };
    export default ItemContext;