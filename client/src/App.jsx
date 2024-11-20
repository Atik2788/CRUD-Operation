import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Users />,
    },
    {
      path: '/create',
      element: <CreateUser />,
    },
    {
      path: '/update/:id',
      element: <UpdateUser />,
      loader: async ({ params }) => fetch(`https://crud-khaki-phi.vercel.app/app/users/${params.id}`)}
  ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
