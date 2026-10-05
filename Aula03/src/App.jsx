import "./App.css";
import Header from "./components/Header";
import SectionDuo from "./components/SectionDuo";
import SectionViolao from "./components/SectionViolao";

export default function App() {
  return (
    <main>
      <Header />
      <SectionDuo bg="#B00"></SectionDuo>
      <SectionViolao></SectionViolao>
      <SectionDuo bg="#a51"></SectionDuo>
    </main>
  );
}
