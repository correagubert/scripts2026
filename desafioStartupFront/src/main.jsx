import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React-Router
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

// Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Rotas
import './index.css'
import Login from './pages/login/Login.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {path: '/dashboard', element: <Dashboard />}
  ] }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>,
)
