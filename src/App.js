import "./App.css";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useState } from "react";
import MarsRover from "./components/MarsRover";
import MarsWeather from "./components/MarsWeather";
import Modal from "./components/Modal";

function App() {
  const [isShow, setIsShow] = useState(false);

  // const getSol = (sol) => {};

  return (
    <>
      <NavBar setIsShow={setIsShow} />
      <Layout>
        <div className="content__container">
          <MarsRover />
        </div>

        <div
          className={
            isShow ? "sidebar__container--expand" : "sidebar__container"
          }
        >
          <button onClick={() => setIsShow(false)}>close</button>
          <div className="weather__container">{<MarsWeather />}</div>
        </div>
      </Layout>
    </>
  );
}

export default App;
