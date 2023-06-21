import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainHeader } from "./components";
import BookCardGrid from "./components/BookCardGrid/BookCardGrid";
import { SelectedBookPage } from "./components/SelectedBookPage";
import { NewBookPage } from "./components/NewBookPage";

function App() {
	return (
    
      <BrowserRouter>
        <MainHeader />
      <BookCardGrid />
      <Routes>
        
      <Route path='books' >
              <Route path='new' element={<NewBookPage/>}/>
              <Route path=':bookIsbn' element={<SelectedBookPage/>}/>
            </Route>
              
            {/* <Route path='search' element={<SearchBookPage/>}/> */}
        </Routes>
      </BrowserRouter>
     
		
	);
}

export default App;
