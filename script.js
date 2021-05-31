var produce = document.body;

var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"Oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

var fromtrees = [];

function assortment(healthy) {
  
  var that = this;
  
  this.id = healthy.id;
  this.image = healthy.image;
  this.name = healthy.name;
  this.price = healthy.price;
  this.color = healthy.color;
  
  this.element = document.createElement("div");
  this.idElement = document.createElement("div");
  this.imageElement = document.createElement("img");
  this.nameElement = document.createElement("h3");
  this.priceElement = document.createElement("h4");
  this.colorElement = document.createElement("div");
  this.popUp = document.createElement("div");
  this.element.classList.add("product");
  this.popUp.classList.add("popUp");
  
  this.imageElement.src = this.image;
  this.nameElement.innerHTML = "Name: "+healthy.name;
  this.priceElement.innerHTML = "Price: $"+healthy.price;
  this.colorElement.innerHTML = healthy.color;

  this.element.appendChild(this.imageElement);
  this.element.appendChild(this.nameElement);
  this.element.appendChild(this.priceElement);

  document.body.appendChild(this.popUp);
  this.popUp.style.display = "none";

  this.element.addEventListener("click", function(){
    if(healthy.id === 0)
    {
      that.popUp.appendChild(that.imageElement);
      that.popUp.appendChild(that.nameElement);
      that.popUp.appendChild(that.priceElement);
      that.popUp.style.display = "flex";
    }
    else if(healthy.id === 1)
    {
      that.popUp.appendChild(that.imageElement);
      that.popUp.appendChild(that.nameElement);
      that.popUp.appendChild(that.priceElement);
      that.popUp.style.display = "flex";
    }
    else if(healthy.id === 2)
    {
      that.popUp.appendChild(that.imageElement);
      that.popUp.appendChild(that.nameElement);
      that.popUp.appendChild(that.priceElement);
      that.popUp.style.display = "flex";
    }
  });

  this.popUp.addEventListener("click", function(){
    if(healthy.id === 0)
    {
      that.element.appendChild(that.imageElement);
      that.element.appendChild(that.nameElement);
      that.element.appendChild(that.priceElement);
      that.popUp.style.display = "none";
    }
    else if(healthy.id === 1)
    {
      that.element.appendChild(that.imageElement);
      that.element.appendChild(that.nameElement);
      that.element.appendChild(that.priceElement);
      that.popUp.style.display = "none";
    }
    else if(healthy.id === 2)
    {
      that.element.appendChild(that.imageElement);
      that.element.appendChild(that.nameElement);
      that.element.appendChild(that.priceElement);
      that.popUp.style.display = "none";
    }
  });

  this.element.addEventListener("mouseover", function(){
    that.element.style.borderColor = healthy.color
  });

  this.element.addEventListener("mouseout", function(){
    that.element.style.borderColor = ""
  });

  document.body.appendChild(this.element);
}

for (var i=0; i<products.length; i++) {
  fromtrees.push(new assortment(products[i]));
}

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body 

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.