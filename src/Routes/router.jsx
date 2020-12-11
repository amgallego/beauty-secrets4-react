import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/home";
import Cursos from "../Pages/Cursos";
import Cuidadoc from "../Pages/CuidadoC";
import Cuidadof from "../Pages/CuidadoF";
import Maquillaje from "../Pages/Maquillaje";
import IniciarSesion from "../Pages/IniciarSesion";
import Registrate from "../Pages/Registrate";
import Contactanos from "../Pages/Contactanos";
import Compras from "../Pages/Compras";

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
                <Route path="/cuidadoc" exact>
                    <Cuidadoc />
                </Route>
                <Route path="/cuidadof" exact>
                    <Cuidadof />
                </Route>
                <Route path="/maquillaje" exact>
                    <Maquillaje />
                </Route>
                <Route path="/iniciarsesion" exact>
                    <IniciarSesion />
                </Route>
                <Route path="/registrate" exact>
                    <Registrate />
                </Route>
                <Route path="/contactanos" exact>
                    <Contactanos />
                </Route>
                <Route path="/compras" exact>
                    <Compras />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default RouterDOM;