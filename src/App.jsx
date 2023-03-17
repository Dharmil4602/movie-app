import { useState, useEffect } from "react";
import {fetchData} from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/HomeSlice";

function App() {
  const { url } = useSelector((state) => state.home)
  console.log(url);
  const dispatch = useDispatch();

  useEffect(() => {
    apiData();
  },[]);

  const apiData = () => {
    fetchData("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div style={{ color: "white" }} className="App">
     App
     {url?.total_pages}
    </div>
  );
}

export default App;
