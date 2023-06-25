import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainHeader } from "./components";
import BookCardGrid from "./components/BookCardGrid/BookCardGrid";
import { SelectedBookPage } from "./components/SelectedBookPage";
import { NewBookPage } from "./components/NewBookPage";
import { SearchBookPage } from "./components/SearchBookPage";
import { SignIn } from "./components/SignIn/SignIn";
import { useSelector } from "react-redux";
import { IStoreState } from "./types";
import { SignUp } from "./components/SignUp/SignUp";
import { SignUpActivation } from "./components/SignUpActivation/SignUpActivation";

function App() {
	const authorizedUser = useSelector(
		(state: IStoreState) => state.user.authorizedUser
	);
	return (
		<BrowserRouter>
			<MainHeader />
			<Routes>
				<Route path="/sign_up" element={<SignUp />} />
				<Route path="/sign_in" element={<SignIn />} />
				<Route path="activate/:uid/:token" element={<SignUpActivation />} />
				<Route
					path="/"
					element={authorizedUser.username ? <NewBookPage /> : <SignIn />}>
					<Route path="books">
						<Route path="new" element={<NewBookPage />} />
						<Route path=":bookIsbn" element={<SelectedBookPage />} />
					</Route>

					<Route path="search" element={<SearchBookPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
