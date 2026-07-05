import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import react router

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

//import toastify
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


import './index.css'
import Login from './pages/Login/Login'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './pages/Dashboard/Dashboard'
import MedicalRecordList from './components/MedicalRecordList/MedicalRecordList'
import RegisterFormPatient from './pages/RegisterFormPatient/RegisterFormPatient'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import DashboardLayout from './layouts/DashboardLayout'
import ConsultorioForm from './components/ConsultorioForm/ConsultorioForm'
import ExamForm from './components/ExamForm/ExamForm'
import PatientDetails from './components/PatientDetails/PatientDetails'
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children:[
      {path: 'dashboard', element: <Dashboard />},
      {path: 'prontuarios', element: <MedicalRecordList />},
      {path: 'pacientes', element: <RegisterFormPatient />},
      {path: 'consultas', element: <ConsultorioForm />},
      {path: 'exames', element: <ExamForm />},
      {path: '/paciente/:id', element: <PatientDetails />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
)
