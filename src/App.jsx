import { useState, useEffect } from "react";
import {fetchData} from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/HomeSlice";

function App() {
  // const homeSelector = useSelector((state) => state.home.value)
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
    </div>
  );
}

export default App;
