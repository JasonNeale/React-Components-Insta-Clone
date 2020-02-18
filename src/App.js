import React, { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer.js"
import PostsPage from "./components/PostsContainer/PostsPage.js"
import Data from "./dummy-data.js"

const App = (props) => {
    const [postData, setPostData] = useState(Data)
    

    return (
        <div className="App" >
            <SearchBar />
            <PostsPage postData={postData} setPostData={setPostData} />
        </div>
    );
};

export default App;