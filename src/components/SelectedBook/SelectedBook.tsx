import './SelectedBook.css'
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import { loadSelectedBook } from '../../redux/action-creators';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const SelectedBook = () => {
    const dispatch = useDispatch()
    const { bookIsbn = '' } = useParams();

    useEffect(() => {
        dispatch(loadSelectedBook(bookIsbn))
        setBookCartStatus(hasCartCurrentBook(isbn13))
    })

    const selectedBook = useSelector((state: IStoreState) => state.books.selectedBook)
    const { title, subtitle, language, authors, publisher, pages, year, rating, isbn10, desc, isbn13, url, pdf, price, image } = selectedBook
    
    const getPdfList = (pdf: any) => {

        for (let key in pdf) {
            return <a key={key} className='free-link' href={pdf[key]}> {key}  </a>
        }
    }

    const hasCartCurrentBook = (isbn13:string) => {
        for (let i = 0; i < cartBooks.length; i++)
            if(cartBooks[i].isbn13 === isbn13) return true
        return false
    }

    const cartBooks = useSelector((state: IStoreState) => state.books.cartBooks)
    const [bookCartStatus, setBookCartStatus] = useState(hasCartCurrentBook(isbn13))


    return (
        <main className="book">
            <div className="book__container">
                <div className="book__image" style={{ background: `url(${image}) center/cover` }}></div>
                <h3 className="book__price">{price }</h3>
                <AddToCartButton bookCartStatus={bookCartStatus} title={title} subtitle={subtitle} isbn13={isbn13} price={price} count={1} image={image} />
            </div>
            <div className="book__info-container">
                <p className="book__authors">{authors}</p>
                <h2 className="book__title">{title}</h2> 
                <h3 className="book__subtitle">{subtitle}</h3>
                <p className="book__desc">{desc}</p>
                <ul className="book__params">
                    <li className="book__code">
                        <span >Product code</span>
                        <span>{isbn10}</span>
                    </li>
                    <li className="book__publisher">
                        <span>Publisher</span>
                        <span>{publisher}</span>
                    </li>
                    <li className="book__year">
                        <span>Year</span>
                        <span>{year}</span>
                    </li>
                    <li className="book__pages">
                        <span>Pages</span>
                        <span>{pages}</span>
                    </li>
                    <li className="book__language">
                        <span>Language</span>
                        <span>{language}</span>
                    </li>
                    <li className="book__isbn">
                        <span>ISBN</span>
                        <span>{isbn13}</span>
                    </li>
                    {
                        pdf? <li className="book__pdf">
                                <span>Free Download</span>
                                <ul className='pdf-list'>
                                    {getPdfList(pdf)}
                                </ul>
                            </li>
                        : <></>
                    }

                </ul>
            </div>
            
        </main>
    )
}
export default SelectedBook
