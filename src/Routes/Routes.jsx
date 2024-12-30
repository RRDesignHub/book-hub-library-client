import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import { Home } from '../Pages/Home'
import  ErrorPage  from '../Pages/ErrorPage'

import { Login } from '../Pages/AuthPages/Login'
import { Register } from '../Pages/AuthPages/Register'
import { ResetPassword } from '../Pages/ResetPassword'
import { AddBook } from '../Pages/AddBook'
import { AllBooks } from '../Pages/AllBooks'
import { CategorizedBooks } from '../Pages/CategorizedBooks'
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
          path:'/allBooks',
          element:<AllBooks></AllBooks>
        },
        {
          path:'/category/:category',
          element:<CategorizedBooks></CategorizedBooks>,
        },
        {
          path:'/addBook',
          element:<AddBook></AddBook>
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