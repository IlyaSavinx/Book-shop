import "./BookCardGrid.css";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IBookInfo, IStoreState } from "../../types"
import { loadNewBooks } from "../../redux/action-creators/books_action_creators";
import BookCard from "../BookCard/BookCard";


const BookCardGrid = () => {
    const filter = 'mongodb';
//     const getMessage = (activePage: string, request:string) => {
//         switch (activePage) {
//             case 'new': {
//                 return 'OOPS... There is no new books releases'
//             }
//             case 'search': {
//                 if (request === '') return `Let's find something!`
//                     else return 'OOPS... No results were found'
//             }
//             case 'favorites': {
//                 return 'OOPS... There is no your favorites books'
//             }
//             case 'viewed': {
//                 return `OOPS... Books you've viewed should be here`
//             }
//         }
//     }
    
//     const BookCardsGrid = () => {
        const dispatch = useDispatch();
            
        const { newBooks, searchBooks, favoritesBooks, viewedBooks } = useSelector((state: IStoreState) => state.books);
        const { activePage, searchRequest} = useSelector((state: IStoreState) => state.ui);
        // const message = getMessage(activePage, searchRequest)
        
        useEffect(() => {
            if (activePage ==='new')
                dispatch(loadNewBooks());
        }, []);
        
        let booksArr: IBookInfo[]=[]
        switch (activePage){
            case 'new': {
                if (newBooks)
                booksArr = [...newBooks]
            }
                break
            case 'search': {
                if (searchBooks)
                booksArr = [...searchBooks]
            }
                break
            case 'favorites': {
                if (favoritesBooks)
                booksArr = [...favoritesBooks]
            }
                break
            case 'viewed': {
                if (viewedBooks)
                booksArr = [...viewedBooks]
            }
        }
        
        
        return (
            booksArr.length?
            <div className="cards-container">
                {booksArr.map((book: IBookInfo, index:number) =>
                    <BookCard
                    key={index}
                    title={book.title}
                    subtitle={book.subtitle}
                    isbn13={book.isbn13}
                    price={book.price}
                    image={book.image}
                    />)}
            </div>
                : <div className="message-container">
                    {/* {message === 'OOPS... No results were found'? <EmptyListIcon width='25' height='25' color={'#fff'}/>:<></>}
                    <h2 className="search-message">{message}</h2> */}
                </div>
        )
    };
    
    export default BookCardGrid;

