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
    genresCall();
  }, []);

  const apiData = () => {
    fetchData("/configuration").then((res) => {
      console.log(res);

      const url = {
        backDrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return (
        genres.map((item) => (allGenres[item.id] = item))
      )
    })
    dispatch(getGenres(allGenres));
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:mediaType/:id" element={<Details/>}/>
        <Route exact path="/search/:query" element={<SearchResult/>} />
        <Route exact path="/explore/:mediaType" element={<Explore/>} />
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
