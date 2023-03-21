import { useEffect, useState } from "react";
import { fetchData } from '../utils/api'
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Set loading to true and data and error to null when the url changes and the useEffect is called. This will trigger the loading state to be true and the data and error to be null.
        setLoading("Loading...")
        setData(null)
        setError(null)

        // Fetch data from the API. When the data is fetched, set the data and loading state to false and error to null. If there is an error, set the error state to true and loading to false.
        fetchData(url).then((res) => {
            setLoading(false)
            setData(res)
        })
        .catch((err) => {
            setLoading(false)
            setError("Something went wrong")
        });
    }, [url]); // Whenever the url changes the useEffect will be called, that's why we declared the url in the dependency array.

    return { data, error, loading };
}

export default useFetch;