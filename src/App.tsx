import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainHeader } from "./components";
import BookCardGrid from "./components/BookCardGrid/BookCardGrid";

function App() {
	return (
    
      <BrowserRouter>
        <MainHeader />
        <BookCardGrid />
      </BrowserRouter>
     
		
	);
}

export default App;
