import { app } from "./App.module.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className={app}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
