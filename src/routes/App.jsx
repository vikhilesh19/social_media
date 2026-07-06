import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../Sidebar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import Postlist from "../components/Postlist";
import { useState } from "react";
import PostListProvider from "../store/postListStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app_container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
