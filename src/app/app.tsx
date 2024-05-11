import {ListViewPage} from "../pages/ListViewPage";
import {DetailViewPage} from "../pages/DetailViewPage";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import {PostType} from "../providers/models/PostType";
import {DataPostContext} from "../providers/DataPostContext/DataPostContext"

function App() {
    const [dataPost, setDataPost] = useState<PostType[]>([])
    return (
        <DataPostContext.Provider value={{dataPost, setDataPost}}>
            <Routes>
                <Route path={"/"} element={<ListViewPage/>}/>
                <Route path={"/detail/:id"} element={<DetailViewPage/>}/>
            </Routes>


        </DataPostContext.Provider>
    );
}

export default App;
