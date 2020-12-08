import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/home";
import Cursos from "../Pages/Cursos";

function RouterDOM() {
    return (
        <BrowserRouter basename="beauty-secrets4-react">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cursos" exact>
                    <Cursos />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default RouterDOM;