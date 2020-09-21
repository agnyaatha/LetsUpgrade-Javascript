// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
    {
      id: 1,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "product1.jfif",
      description: "Good looking white tshirt for men",
    },
    {
      id: 2,
      name: "Black TShirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.png",
      description: "Good looking black tshirt for men",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.jpg",
      description: "Good looking checked shirt for men",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull Blazer for women",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking blue top for women",
    },
  
    {
      id: 6,
      name: "Ethnic Wear",
      size: "M",
      color: "Creamy White",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking traditional dress for women",
    },
    {
        id: 7,
        name: "Leather Jacket",
        size: "L",
        color: "Black",
        price: 1200,
        image: "product7.jfif",
        description: "Good looking leather jacket for men",
      },
      {
        id: 8,
        name: "Sneaker Shoes",
        size: "M",
        color: "Blue",
        price: 1500,
        image: "product8.jpg",
        description: "Good looking sneaker shoes for women",
      },
    
      {
        id: 9,
        name: "Jeans Pant",
        size: "L",
        color: "Navy Blue",
        price: 900,
        image: "product9.jpg",
        description: "Good looking blue jeans for men",
      },
    
      {
        id: 10,
        name: "Black Jeans",
        size: "M",
        color: "Black",
        price: 3000,
        image: "product10.jfif",
        description: "Good looking black jeans for women",
      },
    
      {
        id: 11,
        name: "Sweat Shirt",
        size: "S",
        color: "Red",
        price: 1300,
        image: "product11.jpg",
        description: "Good looking red sweatshirt for women",
      },
    
      {
        id: 12,
        name: "Sandals",
        size: "M",
        color: "Creamy White",
        price: 1500,
        image: "product12.jfif",
        description: "Good looking Sandals for women",
      },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
        // Basic object created to map the data inside the array
        // Destructuring of object
        // Or else we should write inside the display ${product.image} and so on
        // This is to make the code simple
        // Spelling should be same and order doesnt matter
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
    
    document.getElementById(who).innerHTML = productsString;
    cartTotal();
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
        // Takes the input from search and compare it with name , color and description
        let searchString =
        product.name + " " + product.color + " " + product.description;
        // IndexOf function returns -1 if it doesnt match with anything
        console.log(searchString.toUpperCase().indexOf(searchValue.toUpperCase()));
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
    console.log(searchedProducts);
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
  
    //   putting in cart
    if(cart.includes(pro) == false)
    {
        cart.push(pro);
    }
    else
    {
        let stayonpage = confirm("Item already exist in the Cart! \nDo you wish to add it again?");
        if(stayonpage == true) { cart.push(pro); }
        else { alert("Continue shopping"); }

    }
    
    displayProducts(cart, "cart");
    console.log(cart.length);
    cartTotal();
  }
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
    cartTotal();
  } 

   function pricefilter()
   {
       let minvalue = document.getElementById("min").value;
       let maxvalue = document.getElementById("max").value;
    //    console.log(minvalue);
    //    console.log(maxvalue);
    let filtereditems = [];
    products.forEach(function(p) {
        if(p.price>=minvalue && p.price <= maxvalue)
        {
            // console.log(p);
            filtereditems.push(p);
        }
    })
    // console.log(filtereditems);
    displayProducts(filtereditems);
   }

   function cartTotal () {
       let total = "Number of items in cart : " + cart.length;
       document.getElementById("carttotal").innerHTML = total;
   }