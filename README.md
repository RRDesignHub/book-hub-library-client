# Book Hub (Library Management System)

## Project Overview
The **Book Hub** is a web-based application designed for a school to efficiently manage its library operations. The platform allows administrators to add, update, categorize, and track books, while providing users with a seamless interface to borrow and explore the library's collection.

## Live URL
[Live Site Link](#) *(Replace with your deployed URL)*

## Key Features

### Core Features
- **User Authentication**: Email/password-based login and registration with social login options (Google).
- **Book Management**:
  - Add books with details like title, author, category, quantity, rating, etc.
  - Update book information through a dedicated update form.
  - Categorize books and view by category.
- **Borrowing System**:
  - Borrow books with automatic quantity decrement.
  - Return books with quantity increment.
  - Restrict multiple borrowings of the same book simultaneously.
- **Dynamic Routes**:
  - `All Books` (private route): View all available books with filtering and toggle views.
  - `Add Book` (private route): Submit new books to the collection.
  - `Borrowed Books` (private route): View borrowed books and return them.
  - Book details page with borrowing functionality and modal.

### Additional Features
- Fully responsive design for desktop, tablet, and mobile.
- Toast notifications for CRUD operations.
- Dynamic page titles based on route changes.
- 404 page for unmatched routes.
- Loading spinners during data fetching.
- Eye-pleasing design with proper spacing, alignment, and color contrast.



## Technology Stack

### Client-Side
- **React.js**
- **React Router**: For navigation and private routes.
- **Firebase Authentication**: For user login and registration.
- **React Rating Stars Component**: To render book ratings.
- **Toast Notifications**: For feedback on user actions.
- **Tailwind_daisyUI**: For responsive and visually appealing UI.

### Server-Side
- **Node.js** with **Express.js**: Backend server for API endpoints.
- **MongoDB**: Database to store book and user data.

### Deployment
- **Frontend**: Hosted on Netlify.
- **Backend**: Hosted on a production server Vercel.