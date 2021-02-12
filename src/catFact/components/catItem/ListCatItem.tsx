import React, {FC} from "react";
import {Link, generatePath} from "react-router-dom";
import {route} from "../../../route";
import {RemoveCurrentItem} from '../../cat.actions'
import "./catItem.css";
import {useDispatch} from "react-redux";
import {CatFact} from "../../../shared/interfaces/catFact";

interface CatItemProps {
    catFact: CatFact;
}

export const CatItem: FC<CatItemProps> = ({catFact}) => {
    const dispatch = useDispatch();

    return (
        <div className="cat-list-wrapper-item">
            <Link to={generatePath(route.item, {id: catFact._id})}>
                <div className="current-list-item">
                    <div>{catFact.text}</div>
                </div>
            </Link>
            <button
                type="button"
                onClick={() => {
                    dispatch(RemoveCurrentItem(catFact._id));
                }}
            >
                Remove Item
            </button>
        </div>
    );
};
