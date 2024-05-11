import {ListViewPage} from "../pages/ListViewPage";
import {DetailViewPage} from "../pages/DetailViewPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<ListViewPage/>}/>
            <Route path={"/detail/:id"} element={<DetailViewPage/>}/>
        </Routes>


    </>
  );
}

export default App;
