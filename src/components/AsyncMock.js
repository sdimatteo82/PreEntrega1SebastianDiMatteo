const products = [
  {
    id: "1",
    name: "Mercedes",
    price: "50.000",
    category: "automoviles",
    img: "https://images.pexels.com/photos/16052705/pexels-photo-16052705/free-photo-of-verde-coche-deportivo-estacionado-mercedes-benz.jpeg?auto=compress&cs=tinysrgb&w=600",
    stock: "3",
    description: "Mercedes AMG",
  },
  {
    id: "2",
    name: "BMW",
    price: "50.000",
    category: "automoviles",
    img: "https://images.pexels.com/photos/2062789/pexels-photo-2062789.jpeg?auto=compress&cs=tinysrgb&w=600",
    stock: "2",
    description: "BMW M",
  },
  {
    id: "3",
    name: "Ducati ",
    price: "10.000",
    category: "Moto",
    img: "https://images.pexels.com/photos/8186369/pexels-photo-8186369.jpeg?auto=compress&cs=tinysrgb&w=600",
    stock: "",
    description: "Ducati 1500",
  },
  {
    id: "4",
    name: "Yamaha",
    price: "12.000",
    category: "Moto",
    img: "https://images.pexels.com/photos/8532396/pexels-photo-8532396.png?auto=compress&cs=tinysrgb&w=600",
    stock: "",
    description: "Yamaha 1200",
  },
  {
    id: "5",
    name: " Seadoo",
    price: "15.000",
    category: "Moto de Agua",
    img: "https://media.istockphoto.com/id/98462741/es/foto/hermosa-chica-montando-su-motos-acu%C3%A1ticas.jpg?b=1&s=612x612&w=0&k=20&c=VcaQtj8r6xV8lP2c-vWU4-zBYiEJiiD9XmGkXLaV3_A=",
    stock: "5",
    description: "Seadoo 800",
  },
  {
    id: "6",
    name: "Kawasaki",
    price: "1.000",
    category: "Moto de Agua",
    img: "https://media.istockphoto.com/id/1344020131/es/foto/vista-a%C3%A9rea-de-la-moto-acu%C3%A1tica-en-el-mar-azul-jet-ski-en-turquesa-de-aguas-claras-racing-foto.jpg?b=1&s=612x612&w=0&k=20&c=OFoLHP7Xp4mX91lViYAblTCjTY9Rt533lDac9oEpVA4=",
    stock: "3",
    description: "Kawasaki Ninja",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const GetProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
export const getProductByCategory = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
