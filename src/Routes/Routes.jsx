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
import { BookDetails } from '../Pages/BookDetails'
import { UpdateBook } from '../Pages/UpdateBook'
import { BorrowedBooks } from '../Pages/BorrowedBooks'
import PrivateRoute from './PrivateRoute'
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
          element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>
        },
        {
          path:'/category/:category',
          element:<CategorizedBooks></CategorizedBooks>,
        },
        {
          path:'/addBook',
          element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path:'/borrowedBooks',
          element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        },
        {
          path:'/book/:id',
          element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>
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