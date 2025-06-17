import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { AuthProvider, useAuth } from './core/auth-context';
import Login from './components/auth/login';
import Item from './components/settings/item/item'
import ItemRequisitionCreate from './components/requisition/item-requisition-create';
import ItemRequisition from './components/requisition/item-requisition';
import ItemCreate from './components/settings/item/item-create';
import Spec from './components/settings/spec/spec';

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  const { token, logout } = useAuth();

  return (
    <div className="container">
      <div className="row">
        {token ? (
          <>
            <div className="col-md-2">
              <ul>
                <li>Settings
                  <ul>
                    <li><Link to='/settings/item'>Item</Link></li>
                    <li><Link to='/settings/spec'>Spec</Link></li>
                  </ul>
                </li>
                <li><Link to='/requisition'>Requisition</Link></li>
              </ul>
              <button
                className="btn btn-outline-danger btn-sm mt-3"
                onClick={logout}
              >
                Logout
              </button>
            </div>
            <div className="col-md-10">
              <Routes>
                <Route
                  path='/requisition'
                  element={
                    <ProtectedRoute>
                      <ItemRequisition />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/settings/item'
                  element={
                    <ProtectedRoute>
                      <Item />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/settings/item/create'
                  element={
                    <ProtectedRoute>
                      <ItemCreate />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/settings/spec'
                  element={
                    <ProtectedRoute>
                      <Spec />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/requisition/create'
                  element={
                    <ProtectedRoute>
                      <ItemRequisitionCreate />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Navigate to="/requisition" replace />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
