import { useState, useEffect } from "react";
import { fetchData } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/HomeSlice";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const { url } = useSelector((state) => state.home);
  // console.log(url);
  const dispatch = useDispatch();

  useEffect(() => {
    apiData();
  }, []);

  const apiData = () => {
    fetchData("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:mediaType/:id" element={<Details/>}/>
        <Route exact path="/search/:query" element={<SearchResult/>} />
        <Route exact path="/explore/:mediaType" element={<Explore/>} />
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
