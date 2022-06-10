import "./App.css";
import Layout from "./components/Layout";
import MarsWeather from "./components/MarsWeather";
import MarsRover from "./components/MarsRover";
import FilterPrac from "./components/FilterPrac";
import Footer from "./components/Footer";

function App() {
  const getSol = (sol) => {
    console.log(sol);
  };

  return (
    <div>
      <Layout />
      <MarsWeather />
      <MarsRover getSol={getSol} />
      <FilterPrac />
      {/* <NasaWeatherScrape /> */}

      <Footer />
    </div>
  );
}

export default App;
