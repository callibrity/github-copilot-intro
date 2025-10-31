import { useState } from 'react'
import './Exercise2.css'

// TODO: This is a product list that needs filtering features!
// Use your AI assistant to add the missing functionality

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 29.99, rating: 4.5 },
  { id: 2, name: 'Desk Lamp', category: 'Office', price: 45.00, rating: 4.2 },
  { id: 3, name: 'Notebook Set', category: 'Stationery', price: 12.99, rating: 4.8 },
  { id: 4, name: 'USB Hub', category: 'Electronics', price: 19.99, rating: 4.0 },
  { id: 5, name: 'Ergonomic Chair', category: 'Office', price: 299.99, rating: 4.7 },
  { id: 6, name: 'Pen Collection', category: 'Stationery', price: 15.50, rating: 4.3 },
  { id: 7, name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, rating: 4.9 },
  { id: 8, name: 'Monitor Stand', category: 'Office', price: 39.99, rating: 4.4 },
  { id: 9, name: 'Sticky Notes', category: 'Stationery', price: 8.99, rating: 4.1 },
  { id: 10, name: 'Webcam', category: 'Electronics', price: 69.99, rating: 4.6 },
]

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-header">
        <h3>{product.name}</h3>
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-details">
        <div className="product-price">${product.price.toFixed(2)}</div>
        <div className="product-rating">
          {'⭐'.repeat(Math.floor(product.rating))} {product.rating}
        </div>
      </div>
    </div>
  )
}

function ProductList() {
  // TODO: Add state for filters (category, price range, search)
  // TODO: Add filtering logic
  // TODO: Add UI controls for filtering

  const products = SAMPLE_PRODUCTS // TODO: Replace with filtered products

  return (
    <div className="product-list-container">
      <div className="filters-section">
        <h3>Filters</h3>
        {/* TODO: Add filter controls here
            - Category dropdown
            - Min/Max price inputs
            - Search input
        */}
        <p className="todo-note">⚠️ Filter controls need to be added</p>
      </div>

      <div className="products-section">
        <div className="products-header">
          <h3>Products</h3>
          <div className="product-count">
            Showing {products.length} products
          </div>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Exercise2Features() {
  return (
    <div className="exercise-section">
      <h2>Exercise 2: Adding New Features</h2>

      <div className="instructions">
        <h3>Your Task:</h3>
        <ul>
          <li>Open this file: <code>src/exercises/Exercise2Features.jsx</code></li>
          <li>Use your AI assistant to add filtering functionality</li>
          <li>Add filters for category, price range, and search</li>
          <li>Update the product list to show only filtered items</li>
          <li>Update the product count to reflect filtered results</li>
        </ul>

        <h3>Features to Add:</h3>
        <ul>
          <li><strong>Category Filter:</strong> Dropdown to filter by category (All, Electronics, Office, Stationery)</li>
          <li><strong>Price Range:</strong> Min and max price input fields</li>
          <li><strong>Search:</strong> Text input to search product names</li>
          <li><strong>Clear Filters:</strong> Button to reset all filters</li>
        </ul>

        <h3>Example Prompts to Try:</h3>
        <ul>
          <li>"Add state for category filter, price range, and search term"</li>
          <li>"Create a function to filter products based on these criteria"</li>
          <li>"Add a category dropdown in the filters section"</li>
          <li>"Add min/max price input fields"</li>
          <li>"Add a search input box"</li>
          <li>"Add a clear filters button"</li>
        </ul>
      </div>

      <div className="demo-container">
        <h3>Live Demo:</h3>
        <ProductList />
      </div>
    </div>
  )
}
