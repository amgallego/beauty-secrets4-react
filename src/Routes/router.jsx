import { BrouserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/home";
import Cursos from "../Pages/Cursos";

function Router() {
    return(
        <BrouserRouter basename="react-conceptos">
           <Switch>
               <Route path="/" exact>
                    <Home />
               </Route>
               <Route path="/cursos" exact>
                    <Cursos />
               </Route>
           </Switch>
        </BrouserRouter>
    )
}
export default Router;