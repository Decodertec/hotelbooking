import "./App.css";
import NavBar from "./components/navbar";
import Home from "./containers/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelDetails from "./containers/hoteldetails";
import Login from "./containers/login";
import Layout from "./containers/layout";

function App() {
  return (
    <div className="App">
      {/* LAYOUT OF THE APP */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="hotel-details/:slug"
            element={
              <Layout>
                <HotelDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
