import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import List from "./components/List";
import Loader from "./components/Loader";

const PAGE_NUMBER = 1;

const App = () => {
    const [Data, setData] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                `https://picsum.photos/v2/list?page=${page}&limit=6`
            );

            setData((prev) => {
                return [...prev, ...response.data];
            });
            setLoading(false);
        }, 1000);
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div className='app'>
            <List Data={Data} />
            {loading && <Loader />}
        </div>
    );
};

export default App;