import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import Postlist from "./components/Postlist";
import { useState } from "react";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <>
      <div className="app_container">
        <Sidebar
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedtab == "Home" ? (
            <Postlist></Postlist>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
