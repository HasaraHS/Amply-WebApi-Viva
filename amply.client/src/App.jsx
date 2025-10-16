import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import BackofficeDashboard from "./Pages/Auth/Dashboard/BackofficeDashboard/Dashboard";
import ElectiveVehicleDashboard from "./Pages/Auth/Dashboard/ElectiveVehicleDashboard/Dashboard";
import ReservationList from "./Pages/Reservation/ReservationList";
import ReservationForm from "./Pages/Reservation/ReservationForm";
import {
  ChargingStationDashboard,
  ChargingStationList,
  ScheduleManagement,
} from "./Pages/ChargingStationManagement";
import StationDetails from "./Pages/ChargingStationManagement/StationDetails";
import UserProfileList from "./Pages/UserProfile/UserProfileList";
import UnauthorizedPage from "./Pages/Auth/UnauthorizedPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*  Role-Protected Dashboards */}
        <Route
          path="/bodashboard"
          element={
            <ProtectedRoute allowedRoles={["Backofficer"]}>
              <BackofficeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/evdashboard"
          element={
            <ProtectedRoute allowedRoles={["EvOperator"]}>
              <ElectiveVehicleDashboard />
            </ProtectedRoute>
          }
        />

        {/*  Reservation Routes (example: only EvOperator can access) */}
        <Route
          path="/reservations"
          element={
            <ProtectedRoute allowedRoles={["EvOperator"]}>
              <ReservationList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reservation/new"
          element={
            <ProtectedRoute allowedRoles={["EvOperator"]}>
              <ReservationForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reservation/edit/:id"
          element={
            <ProtectedRoute allowedRoles={["EvOperator"]}>
              <ReservationForm />
            </ProtectedRoute>
          }
        />

        {/*  Charging Station Management (Backofficer only) */}
        <Route
          path="/charging-stations"
          element={
            <ProtectedRoute allowedRoles={["Backofficer"]}>
              <ChargingStationDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/charging-stations/list"
          element={
            <ProtectedRoute allowedRoles={["Backofficer"]}>
              <ChargingStationList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/charging-stations/details/:id"
          element={
            <ProtectedRoute allowedRoles={["Backofficer"]}>
              <StationDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/charging-stations/schedule/:id"
          element={
            <ProtectedRoute allowedRoles={["Backofficer"]}>
              <ScheduleManagement />
            </ProtectedRoute>
          }
        />

        {/*  EV Owner Profile Routes */}
        <Route
          path="/user-profile/list"
          element={
            <ProtectedRoute allowedRoles={["Backofficer"]}>
              <UserProfileList />
            </ProtectedRoute>
          }
        />

        {/*  Unauthorized Fallback */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
