import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, useHistory, useParams} from "react-router";
import {route} from "../../../route";
import "./itemView.css";
import {InitialCatState} from "../../../store/initialState";
import {CatFact} from "../../../shared/interfaces/catFact";

export const CatFactDetails = () => {
    const appStore = useSelector((store: InitialCatState) => store);
    const params: { id: string } = useParams();
    const history = useHistory();

    const item = appStore.items.filter((item: CatFact) => item._id === params.id)
    return item.length === 0 ? (
        <Redirect
            to={{
                pathname: route.main,
            }}
        />
    ) : (
        <div className="item-cat-wrapper">
            <button
                className="go-back-btn"
                type="button"
                onClick={() => {
                    history.push(route.main);
                }}
            >
                Go Back
            </button>
            <h2>{item[0].type}</h2>
            <p>{item[0].text}</p>
            <h5>User ID : {item[0].user}</h5>
        </div>
    );
};
