import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import Workspace from "../../features/workspace/pages/Workspace";

import Dashboard from "../../features/workspace/pages/Dashboard";
import Channels from "../../features/workspace/pages/Channels";
import Documents from "../../features/workspace/pages/Documents";
import Members from "../../features/workspace/pages/Members";
import Settings from "../../features/workspace/pages/Settings";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
        <Route
          path="/"
          element={<Navigate to="/workspace/dashboard" replace />}
        />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Workspace Layout Routes */}
            <Route
             path="/workspace"
                        element={
                <ProtectedRoute>
                <Workspace />
                </ProtectedRoute>
             }
>          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="channels"
            element={<Channels />}
          />

          <Route
            path="documents"
            element={<Documents />}
          />

          <Route
            path="members"
            element={<Members />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>

        {/* 404 Fallback */}
        <Route
          path="*"
          element={<Navigate to="/workspace/dashboard" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;