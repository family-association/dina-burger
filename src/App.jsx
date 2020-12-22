import { app } from "./App.module.scss";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className={app}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
