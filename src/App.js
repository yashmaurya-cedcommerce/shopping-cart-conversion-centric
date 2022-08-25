import './App.css';
import Home from './components/Home';
import { Data } from './components/Data';
import { useState } from 'react';
import Navbar from './components/Navbar';



function App() {

  const [cartArray, setCartArray] = useState([]);
  const [drawerFlag, setDrawerFlag] = useState(false);
  const [data, setData] = useState(Data);

  // add to cart function that adds products into our cart 

  var addToCart = (event) => {

    var flag = 0;
    var productID = event.currentTarget.id;

    // fetching the details of the clicked product from our data file 

    data.clothing.map((item) => {
      if (item.id == productID) {

        // checking if the product is already present inside the array 

        cartArray.map((item2, index) => {
          if (item2.id == productID) {
            var tempArray = cartArray;
            tempArray[index].quant++;
            tempArray[index].productTotal = tempArray[index].quant * tempArray[index].price;

            setCartArray([...tempArray]);
            flag = 1;
          }
        })

        // pushing the product into array if it is not present there 

        if (flag == 0) {
          setCartArray(prevArray => [...prevArray, {
            id: item.id,
            name: item.name,
            photograph: item.photograph,
            mrp: item.mrp,
            price: item.price,
            material: item.material,
            quant: 1,
            productTotal: 1 * item.price
          }]);
        }
      }
    })
  }



  // increases the quantity of the product in our cart table 

  var incrementQuant = (event) => {
    var cartID = event.currentTarget.id;
    var tempArray = cartArray;
    tempArray[cartID].quant++;
    tempArray[cartID].productTotal = tempArray[cartID].quant * tempArray[cartID].price;
    setCartArray([...tempArray]);
  }

  var decrementQuant = (event) => {
    var cartID = event.currentTarget.id;

    // removing the product if the quantity is decremented to zero 

    if (cartArray[cartID].quant === 1) {
      var filteredArray = cartArray;
      filteredArray.splice(cartID, 1);
      setCartArray([...filteredArray]);
    }

    // removing one quantity at a time on decrement click 

    else {
      var tempArray = cartArray;
      tempArray[cartID].quant--;
      tempArray[cartID].productTotal = tempArray[cartID].quant * tempArray[cartID].price;
      setCartArray([...tempArray]);
    }
  }

  // empty the cart array on button click 

  var emptyCart = () => {
    setCartArray([]);
    setDrawerFlag(false);
  }

  var cartClicked = () => {
    setDrawerFlag(true);
  }

  var closeDrawer = () => {
    setDrawerFlag(false);
  }

  return (
    <div className="App">

      <Navbar />
      <Home Data={data} addToCart={addToCart} cartArray={cartArray} incrementQuant={incrementQuant} decrementQuant={decrementQuant} emptyCart={emptyCart} cartClicked={cartClicked} closeDrawer={closeDrawer} drawerFlag={drawerFlag} />


      <div className='cartBadgeDiv'>

        <button className='cartBadgeBtn' onClick={(event) => cartClicked(event)}><i class="fa-solid fa-cart-arrow-down"></i> ({cartArray.length})</button>


      </div>

    </div>
  );
}

export default App;
