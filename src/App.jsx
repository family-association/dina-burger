import { BrowserRouter, Route, Switch } from "react-router-dom";
import { app } from "./App.module.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
function App() {
  return (
    <BrowserRouter>
      <div className={app}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
