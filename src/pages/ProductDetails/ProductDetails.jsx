import React, { useState } from "react";
import Container from "../../components/Common/Container";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const productData = {
    title: "Sample Product",
    price: 99.99,
    description: "This is a detailed description of the product.",
    images: [
      "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    specifications: [
      "High-quality material",
      "Available in various colors",
      "2-year warranty",
    ],
    reviews: [
      { user: "John Doe", rating: 5, comment: "Great product!" },
      { user: "Jane Doe", rating: 4, comment: "Worth the price." },
    ],
  };

  const relatedProducts = [
    {
      id: 1,
      title: "Product A",
      price: 79.99,
      image:
        "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Product B",
      price: 89.99,
      image:
        "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Tab content to be rendered based on activeTab
  const renderTabContent = () => {
    if (activeTab === 0) {
      return (
        <div>
          <h2 className="text-2xl font-semibold">Specifications</h2>
          <ul className="list-disc ml-6 mt-4">
            {productData.specifications.map((spec, index) => (
              <li key={index} className="text-gray-700">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="mt-6 space-y-6">
            {productData.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{review.user}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">
                    {"★".repeat(review.rating)}
                  </span>
                  <span className="text-gray-400">
                    {"★".repeat(5 - review.rating)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {review.rating}/5
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div>
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="mt-6 space-y-6">
            {productData.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{review.user}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">
                    {"★".repeat(review.rating)}
                  </span>
                  <span className="text-gray-400">
                    {"★".repeat(5 - review.rating)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {review.rating}/5
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div>
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="mt-6 space-y-6">
            {productData.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{review.user}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">
                    {"★".repeat(review.rating)}
                  </span>
                  <span className="text-gray-400">
                    {"★".repeat(5 - review.rating)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {review.rating}/5
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="my-20">
      <Container>
        <div className="container mx-auto p-4   ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            {/* Left Column: Image Gallery */}
            <div className="flex flex-col items-center">
              <img
                src={productData.images[selectedImageIndex]}
                alt="Product"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {productData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product ${index + 1}`}
                    className={`w-16 h-16 object-cover cursor-pointer rounded-md transition-all duration-300 ${
                      selectedImageIndex === index
                        ? "border-2 border-blue-500 shadow-md"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Product Information */}
            <div>
              <h1 className="text-3xl font-bold">{productData.title}</h1>
              {/* Price Section */}
              <p className="text-2xl text-red-600 font-semibold mt-2">
                ${productData.price.toFixed(2)}
              </p>

              {/* Short Product Description */}
              <p className="text-gray-600 mt-4">
                {productData.description} This product is crafted with attention
                to detail, ensuring both durability and style. Whether you're
                looking for performance or aesthetics, this product has it all.
              </p>

              {/* Detailed Product Features */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Key Features:</h3>
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  <li>Made from high-quality, eco-friendly materials.</li>
                  <li>
                    Available in a range of colors and sizes to suit your
                    preferences.
                  </li>
                  <li>Designed for optimal comfort and functionality.</li>
                  <li>
                    2-year warranty for guaranteed satisfaction and peace of
                    mind.
                  </li>
                </ul>
              </div>

              {/* Product Availability */}
              <p className="text-sm text-green-600 font-medium mt-2">
                In Stock - Order now and get it delivered within 3-5 business
                days.
              </p>

              {/* Shipping Information */}
              {/* <p className="text-gray-500 text-sm mt-1">
                Free shipping on orders over $50. Expedited shipping options
                available.
              </p> */}

              {/* Customer Support */}
              {/* <p className="text-gray-500 text-sm mt-1">
                Need help with your order? Our customer support is available
                24/7.
              </p> */}

              {/* Add to Cart Button */}

              {/* Base */}

              <div className="mt-8 flex gap-4 ">
                <a
                  className="inline-flex items-center gap-2 duration-500 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="#"
                >
                  <span className="text-sm font-medium"> Buy now </span>

                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center gap-2  rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 duration-300"
                  href="#"
                >
                  <HiOutlineShoppingCart className="size-5 rtl:rotate-180" />

                  <span className="text-sm font-medium"> Add to cart </span>
                </a>
              </div>

              {/* Wishlist and Comparison Options */}
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12">
            <div className="flex border-b">
              <button
                className={`px-4 py-2 text-lg ${
                  activeTab === 0
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(0)}
              >
                Specifications
              </button>
              <button
                className={`px-4 py-2 text-lg ${
                  activeTab === 1
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Information
              </button>
              <button
                className={`px-4 py-2 text-lg ${
                  activeTab === 1
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(2)}
              >
                Reviews
              </button>
              <button
                className={`px-4 py-2 text-lg ${
                  activeTab === 1
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(3)}
              >
                All Features
              </button>
            </div>

            {/* Tab content based on active tab */}
            <div className="mt-6">{renderTabContent()}</div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-red-600 font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
