import React, {FC, useEffect} from "react";
import Router from "./route";
import {useDispatch} from "react-redux";
import {fetchItems} from "./catFact/cat.thunk";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch]);

    return (
        <Router/>
    );
}

export default App;
