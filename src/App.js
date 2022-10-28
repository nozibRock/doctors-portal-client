import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Loading from "./Pages/Shared/Loading/Loading";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory/MyHistory";
import Users from "./Pages/Dashboard/Users/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="max-w-7xl mx-auto px-12">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/appointment"
              element={
                <RequireAuth>
                  <Appointment />
                </RequireAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route index element={<MyAppointments />} />
              <Route path="review" element={<MyReview />} />
              <Route path="history" element={<MyHistory />} />
              <Route path="users" element={ <RequireAdmin> <Users /> </RequireAdmin> } />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
