import React from 'react';
import Main from "./catFact/pages/Main/Main";
import {Switch, Route} from "react-router-dom";
import {CatFactDetails} from "./catFact/pages/ItemView/ItemView";

export const route: {
    main: string;
    item: string;
} = {
    main: "/",
    item: "/item/:id",
};

const Router = () => {
    return (
        <Switch>
            <Route exact path={route.main} component={Main}/>
            <Route path={route.item} component={CatFactDetails}/>
        </Switch>
    );
};

export default Router;
