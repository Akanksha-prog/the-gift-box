import './App.css'
import Header from './Components/Header' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Vision from './Components/Vision'
import Shopby from './Components/Shopby'
import Navigation from './Components/Navigation'
import Aos from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";
import Testimonial from './Components/Testimonial' 
import Videos from './Components/Video'
import Customize_1 from './Components/Customize_1'
import Customize_2 from './Components/Customize_2'
import Customize_3 from './Components/Customize_3'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  useEffect(() => {
    Aos.init({duration: 2000});
    Aos.refresh();
  }, []);
  
  
  
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Vision />
      <Shopby />
      <Testimonial />
      <Videos />
      <Customize_1 />
      <Customize_2 />
      <Customize_3 />
      <Contact />
      <Footer />
    </div>
);
}

export default App;
