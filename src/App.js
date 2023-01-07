
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Description from './components/Description';
import SampleAPI from './components/SampleAPI';
import Pricing from './components/Pricing';
import Info from './components/Info';
import Footer from './components/Footer';



  



function App() {

  



  return (
    <>
    <div className="App" id='app'>
      <Navbar />
      <Landing />
      <Description />
      <SampleAPI />
      <Pricing />
      <Info />
    </div>
      <Footer />
    </>
  );
}

export default App;
