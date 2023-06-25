import "./BookCardGrid.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBookInfo, IStoreState } from "../../types";
import { loadNewBooks } from "../../redux/action-creators/books_action_creators";
import BookCard from "../BookCard/BookCard";

const BookCardGrid = () => {
	const dispatch = useDispatch();

	const { newBooks, searchBooks } = useSelector(
		(state: IStoreState) => state.books
	);
	const { activePage } = useSelector((state: IStoreState) => state.ui);

	useEffect(() => {
		if (activePage === "books/new") dispatch(loadNewBooks());
	}, []);

	let booksArr: IBookInfo[] = [];
	switch (activePage) {
		case "books/new":
				if (newBooks) booksArr = [...newBooks];
			break;
		case "search":
				if (searchBooks) booksArr = [...searchBooks];
			break;
	}

	return booksArr.length ? (
		<div className="cards-container">
			{booksArr.map((book: IBookInfo, index: number) => (
				<BookCard
					key={index}
					title={book.title}
					subtitle={book.subtitle}
					isbn13={book.isbn13}
					price={book.price}
					image={book.image}
				/>
			))}
		</div>
	) : (
            <div className="message-container">
                <h2>Empty list</h2>
		</div>
	);
};

export default BookCardGrid;
