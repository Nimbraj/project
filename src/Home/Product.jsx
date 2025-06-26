import React from "react";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "Premium wireless headphones with noise cancellation and 20-hour battery life.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1770&q=80",
    category: "Most Selling",
    price: 3999,
  },
  {
    id: 2,
    title: "Smart Watch",
    description:
      "Stay connected and track your health with this advanced smart watch.",
    image:
      "https://images.unsplash.com/photo-1589308078055-17d3d3dcf51c?auto=format&fit=crop&w=800&q=80",
    category: "Trending",
    price: 2999,
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    description:
      "Compact and waterproof speaker with deep bass and long battery life.",
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552262c39?auto=format&fit=crop&w=800&q=80",
    category: "Regular",
    price: 1499,
  },
  {
    id: 4,
    title: "DSLR Camera",
    description:
      "Professional-quality DSLR camera for stunning photography and video.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    category: "Most Selling",
    price: 25999,
  },
];

const categoryColor = {
  "Most Selling": "bg-rose-100 text-rose-700",
  Trending: "bg-yellow-100 text-yellow-700",
  Regular: "bg-gray-100 text-gray-800",
};

export default function ProductPage() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <span
                className={`inline-block mb-2 px-2 py-1 text-xs font-semibold rounded ${categoryColor[product.category]}`}
              >
                {product.category}
              </span>

              <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>

              <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                {product.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-semibold text-teal-600">
                  ₹{product.price}
                </span>
                <a
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:translate-x-0.5"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
