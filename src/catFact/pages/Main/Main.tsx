import React from "react";
import {useSelector} from "react-redux";
import "./main.css";
import {CatFact} from "../../../shared/interfaces/catFact";
import {InitialCatState} from "../../../store/initialState";
import {CatItem} from "../../components/catItem/ListCatItem";

const Main = () => {
    const store = useSelector((store: InitialCatState) => store);

    return (
        <div className="cat-list-wrapper">
            <div className="cat-list">
                {
                    store.isLoading ? (
                        <div>Loading</div>
                    ) : (
                        <div className="cat-item">
                            {store.items.map((item: CatFact) => (
                                <CatItem key={item._id} catFact={item}/>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default Main;
