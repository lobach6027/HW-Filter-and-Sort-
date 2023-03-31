import { Route, Routes } from "react-router-dom";
import AddPage from "../../pages/AddPage";
import NotFoundPage from "../../pages/NotFoundPage";
import SortPage from "../../pages/SortPage";
import Header from "../Header";


function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route element = {<AddPage/>} path = '/'/>
      <Route element = {<SortPage/>} path = '/sort'/>
      <Route element = {<NotFoundPage/>} path = '/*'/>
    </Routes>
    </div>
  );
}

export default App;
