import "./App.css";
import Section from "./components/Section";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <body>
      <Header></Header>
      <Section cor="red">
        <Card cor="pink" />
        <Card cor="pink" />
      </Section>
      <Section cor="cyan">
        <Card cor="white" border={true} />
        <Card cor="white" border={true} />
        <Card cor="white" border={true} />
        <Card cor="white" border={true} />
      </Section>
      <Section cor="brown" />
      <Section cor="yellow">
        <Card cor="blue" />
        <Card cor="cyan" />
      </Section>
      <Footer></Footer>
    </body>
  );
}
