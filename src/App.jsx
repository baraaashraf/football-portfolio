import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Career from "./components/career/Career";
import Contactme from "./components/contactme/Contactme";
import Aboutme from "./components/aboutme/Aboutme";
import Gallery from "./components/gallery/Gallery";

// ????????????????????
import img1 from '../src/assets/images/img1.jpg'
import img2 from '../src/assets/images/img2.jpg'
import img3 from '../src/assets/images/img4.jpg'
import img4 from '../src/assets/images/img5.jpg'
function App() {
  const slides = [
    {
      url: img1,
      title: "image 1",
    },
    {
      url: img2,
      title: "image 2",
    },
    {
      url: img3,
      title: "image 3",
    },
    {
      url: img4,
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
