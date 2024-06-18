import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Body from './Components/Body';
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import ProductPage from './Components/ProductPage';
import ProductList from './Components/ProductList';
function App() {

const routes = createBrowserRouter([
/*/By the  way Absolute path have a slashh and relative path dont slash/*/
// i explain something when you use relative the parant path have slash with name
//example /root, then the rest have no slash
{
  path:'/',
  element:<Root/>,
  errorElement:<ErrorPage/>,
  children:[
    //pwede ka gumamit ng index route para sa main component
    //example index:true means sya yung pinaka main
    // pero defens naman sayu yan

    { path:'',element:<Body/>  },
    {path:'product',element:<ProductList/>},
    {path:'Product/:id',element:<ProductPage/>}
  ]
}
]);

  return (
    <>
   <RouterProvider router={routes}/>
    </>
  )
}

export default App
