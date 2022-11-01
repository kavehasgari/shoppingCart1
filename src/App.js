import React from "react";
import ProductContextProvider from "./Context/ProductContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/ProductStore/CardContainer";
import CartContextProvider from "./Context/CartReducerContext";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import { Route , Switch} from 'react-router-dom';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path='/detailpage/:id' component={DetailsPage}/> 
          <Route path='/' component={CardContainer}/>
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
