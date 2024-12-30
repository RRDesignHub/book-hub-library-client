import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import { Home } from '../Pages/Home'
import  ErrorPage  from '../Pages/ErrorPage'

import { Login } from '../Pages/AuthPages/Login'
import { Register } from '../Pages/AuthPages/Register'
import { ResetPassword } from '../Pages/ResetPassword'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element:<Home></Home> 
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/reset-password',
          element:<ResetPassword></ResetPassword>
        }
      ]
    }
  ]
)
export default router;