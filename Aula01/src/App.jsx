import "./App.css";
import Header from "./components/Header";
import Miolo from "./components/Miolo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Miolo/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
