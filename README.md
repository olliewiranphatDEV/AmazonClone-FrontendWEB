# Amazon Clone – Full-Stack E-commerce Web Application

A fully functional e-commerce platform inspired by Amazon. Built with modern technologies including React.js, Node.js, Express.js, Prisma, and PostgreSQL, this clone features user authentication, product listings, shopping cart, Stripe payment integration, and an admin dashboard.

``` ------------------------------------------------------------------------------ ```
## Features

- Authentication (Sign up, Sign in, Clerk Integration)

- Product Listings with Search, Filter, and Categories

- Shopping Cart: Add, update, and remove items

- Checkout with Stripe Payment Integration

- Order Management for users and admins

- Admin Dashboard: Manage products, categories, orders

- Responsive UI with Tailwind CSS

- Real-time updates (optional with Socket.io)

- Tech Stack

## Frontend

- React.js

- Tailwind CSS

- Axios

- Clerk (Authentication)

## Backend

- Node.js

- Express.js

- Prisma ORM

- Stripe API

## Database

- MySQL


## Getting Started

# 1. Clone the Repository

git clone https://github.com/olliewiranphatDEV/amazonclone-frontendWEB.git
cd amazon-clone

# 2. Install Dependencies

## For frontend
``` bash
cd client
npm install 
```

## For backend
``` bash
cd ../server
npm install
```

# 3. Environment Variables

Create .env files in both client and server directories.

# Example .env for Backend:
DATABASE_URL=your_mysql_url
STRIPE_SECRET_KEY=your_stripe_secret_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Example .env for Frontend:
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# 4. Run the Application

## Start backend
``` bash
cd server
npx prisma generate
npx prisma migrate dev
npm start
```

## Start frontend
``` bash
cd ../client
npm run dev
```

Visit http://localhost:5173 in your browser.


📁 Project Structure

/amazon-clone
├── /client          # React frontend
│   ├── /src
│   └── vite.config.js
├── /server          # Express backend
│   ├── /routes
│   ├── /controllers
│   ├── /prisma
│   └── index.js
├── README.md
└── .gitignore

## License

This project is licensed under the MIT License.

## Acknowledgements

Inspired by Amazon.com

Clerk for seamless authentication

Stripe for secure payments

Prisma for elegant database access

