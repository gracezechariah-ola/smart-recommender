
# Product Recommender – GraphQL + React

This project is a **full-stack application** consisting of:

1. **GraphQL API** (`product-graphql-api`) – Provides product data from a local JSON file.
2. **React Frontend** (`product-recommender-react-graphql-app`) – Queries the GraphQL API and displays products with filtering and collapsible cards.

---

## Project Structure

```
project-root/
│
backend
├── product-graphql-api/             # GraphQL API 
│   ├── src/
│   │   ├── config/
│   │   └── config.ts                # App Host/port 
│   │
│   │   ├── data/
│   │   └── headphones.json          # Headphones data 
│   │
│   │   ├── graphs/                  # GraphQL 
│   │   └── resolvers.ts          
│   │   └── schema.ts           
│   │
│   │   ├── models/
│   │   └── iproduct.model.ts           
│   │   └── product.model.ts          # Headphones data model
│   │
│   │   ├──  server.ts
│   │
│   ├── .git
│   ├── .gitignore
│   ├── .eslintrc.json
│   ├── .eslintignore
│   ├── tsconfig.json
│   ├── package-lock.json
│   └── package.json
│
│frontend
├── product-recommender-react-graphql-app/   # React frontend
│   ├── public/
│   │   └── favicon.ico                
│   │   └── index.html                 
│   │   └── manifest.json                 
│   │
│   ├── src/
│   │   ├── components               
│   │   │   ├── shared               
│   │   │   │   ├── images               
│   │   │   │   └── client.js                 
│   │   │   │
│   │   │   │   ├── layout               
│   │   │   │   └── About-us.js                 
│   │   │   │   └── Contact-us.js                 
│   │   │   │   └── Footer.js                 
│   │   │   │   └── Home.js                 
│   │   │   │   └── NavHeader.js                 
│   │   │   │
│   │   │   └── CollapsibleProductList.css                 
│   │   │   └── CollapsibleProductList.js                 
│   │   │   └── FilteredMatches.css                 
│   │   │   └── FilteredMatches.js                 
│   │   │   └── FilterSelector.css                 
│   │   │   └── FilterSelector.js                 
│   │   │   └── ProductList.js                 
│   │   │   
│   │   ├── graphs                   # Apollo Client setup
│   │   └── client.js                 
│   │   │   
│   │   ├── App.css                
│   │   ├── App.js        
│   │   ├── index.css   
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .git
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
│
└── README.md                        # This file
```

---

## ⚙️ Backend – GraphQL API

### 📁 Folder: `product-graphql-api`

This service exposes a **GraphQL API** that serves product (headphone) data from `data/headphones.json`.

### Example JSON (`headphones.json`)

```json
[
  {
    "id": "1",
    "name": "Sony WH-1000XM5",
    "make": "Sony",
    "model": "WH-1000XM5",
    "price": 299.99,
    "colour": "black",
    "connection": "wireless",
    "description": "Noise cancelling headphones with superior sound",
    "seller": "Amazon",
    "sellerUrl": "https://www.amazon.co.uk/example",
    "image": "https://example.com/sony.jpg",
    "deliveryCost": 5.99,
    "deliveryTime": "2-3 days"
  }
]
```

### 🚀 Run API

```bash
cd product-graphql-api
npm install
npm start
```

The API will start on [http://localhost:4000/graphql](http://localhost:4000/graphql).

### Example Query

```graphql
query {
  products(filter: { price: 500, colour: "black", description: "wireless" }) {
    id
    name
    price
    colour
    description
  }
}
```

---

## 🎨 Frontend – React App

### 📁 Folder: `recommender-react-graphql-app`

This React app connects to the **GraphQL API** using Apollo Client.

Features:

* **Filter products** by price, colour, and description (wired/wireless).
* **Submit filters** and see results.
* Products displayed in **collapsible cards** with details (image, price, description, colour).

### 🚀 Run Frontend

```bash
cd product-recommender-react-graphql-app
npm install
npm start
```

The app will start on [http://localhost:3000](http://localhost:3000).

---

## 🔗 Connecting Frontend & Backend

* Start the **GraphQL API** first (`npm start` in `product-graphql-api`).
* Then run the **React frontend** (`npm start` in `product-recommender-react-graphql-app`).
* The frontend queries the backend at `http://localhost:4000/graphql`.

  > If your API runs on a different port or host, update the **URI** in `client.js`.

---

## 🛠 Tech Stack

* **Backend**: Node.js, TypeScript, Express.js, Apollo Server, GraphQL
* **Frontend**: React, Apollo Client, JavaScript, CSS

---

## 📌 Future Improvements

* Add **search bar** for product names.
* Add **pagination or infinite scrolling** for products.
