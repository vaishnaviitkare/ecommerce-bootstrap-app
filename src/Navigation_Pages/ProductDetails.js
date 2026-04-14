import { useParams } from "react-router-dom";
import { useState,useContext } from "react";
import { DataCon } from "../Context/DataContext";
import { ModalCon } from "../Context/ModalContext";
import "./ProductDetails.css";
const products = [
  {
    id: "1",
    title: "Album 1",
    price: 100,
    description: "High quality album with amazing sound.",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "/images/Album1(1).png",
      "/images/Album1(2).png"
    ],
    reviews: ["Amazing!", "Loved it!", "Worth buying"],
    quantity:1,
  },
  {
    id: "2",
    title: "Album 2",
    price: 50,
    description: "Budget friendly album.",
    images: [
       'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        "/images/Album2(1).png",
        "/images/Album2(2).png"
    ],
    reviews: ["Nice"],
    quantity:1
  },
  {
    id: "3",
    title: "Album 3",
    price: 70,
    description: "Budget friendly album.",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "/images/Album3(1).png",
      "/images/Album3(2).png",
    ],
    reviews: ["Good"],
    quantity:1
  },
  {
    id: "4",
    title: "Album 4",
    price: 100,
    description: "High quality album.",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      "/images/Album4(1).png",
      "/images/Album4(2).png",
    ],
    reviews: ["Good", "Nice"],
    quantity:1
  }
];

function ProductDetails() {
  const { id } = useParams();
  const {addToCart}=useContext(DataCon);   
  const product = products.find((p) => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(
    product?.images[0]
  );

  if (!product) return <h2>Product not found</h2>;
 const handleAddToCart = () => {
    const cartItem = {
      id: Number(product.id),         
      title: product.title,
      price: product.price,
      imageUrl: product.images[0],    
      quantity: 1,
    };
    addToCart(cartItem);
  }
  return (
    <div  className="maindiv">
      
      {/* 🔹 LEFT SIDE (Images) */}
      <div>
        {/* Small Images */}
        <div className="smallimg">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Big Image */}
        <div className="bigimg">
          <img
            src={selectedImage}
          />
        </div>
      </div>

      {/* 🔹 RIGHT SIDE (Details) */}
      <div className="details">
        <h2>{product.title}</h2>   

        <h3 style={{ color: "green" }}>₹{product.price}</h3>

        <p>{product.description}</p>

        <button onClick={handleAddToCart}>
          ADD TO CART
        </button>

        <hr />

        {/* Reviews */}
        <h3>Reviews</h3>
        {product.reviews.map((rev, i) => (
          <p key={i}>⭐ {rev}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;