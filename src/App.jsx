import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Career from "./components/career/Career";
import Contactme from "./components/contactme/Contactme";
import Aboutme from "./components/aboutme/Aboutme";
import Gallery from "./components/gallery/Gallery";
function App() {
  const slides = [
    {
      url: "http://localhost:3000/img1.jpg",
      title: "image 1",
    },
    {
      url: "http://localhost:3000/img2.jpg",
      title: "image 2",
    },
    {
      url: "http://localhost:3000/img4.jpg",
      title: "image 3",
    },
    {
      url: "http://localhost:3000/img5.jpg",
      title: "image 4",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Career />
      <Gallery slides={slides}/>
      <Contactme />
    </>
  );
}

export default App;
