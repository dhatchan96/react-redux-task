
# Shopping Cart Application with Redux Toolkit

This project is a Shopping Cart application built with React, Vite, and Redux Toolkit. It includes features like adding/removing items, updating item quantities, and displaying the total quantity and amount. The application leverages Redux Toolkit for state management, providing a scalable and efficient way to manage the cart's state.

## Features

- **Add/Remove Items**: Easily add or remove items from the cart.
- **Quantity Adjustment**: Modify the quantity of items directly from the cart.
- **Total Calculation**: Automatically calculates total quantity and amount.
- **Dynamic Title and Favicon**: Title updates based on cart contents, and a favicon/logo is displayed in the title bar.
- **Responsive Design**: Optimized for different screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast project bundling and development.
- **Redux Toolkit**: For efficient state management across the app.
- **React-Redux**: For connecting React components to the Redux store.
- **CSS**: For styling the components.

## Project Structure

```
.
├── public
│   ├── index.html      # Main HTML file
│   ├── logo.png        # Favicon logo for the title bar
├── src
│   ├── App.jsx         # Root component of the application
│   ├── store.js        # Redux store setup
│   ├── cartSlice.js    # Redux slice for cart state management
│   ├── CartPage.jsx    # Cart page component displaying cart items
│   ├── CartPage.css    # CSS for cart page styling
│   ├── products.json   # Sample data file with products
│   └── main.jsx        # Entry point for Vite
├── .gitignore          # Specifies files to ignore in Git
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (>=14)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dhatchan96/react-redux-task.git
   cd react-redux-task
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).
