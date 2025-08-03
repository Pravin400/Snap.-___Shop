# Snap@Shop - Modern E-commerce Website

A modern, responsive e-commerce website built with React, featuring a beautiful UI and full shopping functionality.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse products from FakeStore API
- **Product Search**: Search products by title and description
- **Category Filtering**: Filter products by category (Men's Clothing, Women's Clothing, Jewelry, Electronics)
- **Product Details**: Detailed product pages with ratings and descriptions
- **Shopping Cart**: Add, remove, and update product quantities
- **Checkout Process**: Complete checkout with shipping information
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### Technical Features
- **React 19**: Latest React with modern hooks
- **React Router**: Client-side routing
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **FakeStore API**: Real product data from external API
- **Local State Management**: Efficient state management with React hooks

## 🛠️ Technologies Used

- **Frontend**: React 19, React Router DOM
- **Styling**: CSS3 with modern design patterns
- **API**: FakeStore API for product data
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Snap@Shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
Snap@Shop/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Header.css
│   │   ├── Home.jsx            # Landing page
│   │   ├── Home.css
│   │   ├── Shop.jsx            # Product catalog
│   │   ├── Shop.css
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── ProductCard.css
│   │   ├── ProductDetail.jsx   # Product detail page
│   │   ├── ProductDetail.css
│   │   ├── Cart.jsx            # Shopping cart
│   │   ├── Cart.css
│   │   ├── Checkout.jsx        # Checkout process
│   │   └── Checkout.css
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Components

### App.jsx
- Main application component with routing
- Product data fetching from FakeStore API
- Cart state management
- Global functions for cart operations

### Header.jsx
- Navigation menu with logo
- Search functionality
- Cart icon with item count
- Category dropdown menu

### Shop.jsx
- Product grid display
- Search and filtering functionality
- Category filtering
- Loading states

### ProductCard.jsx
- Individual product display
- Star rating system
- Add to cart functionality
- Responsive design

### Cart.jsx
- Shopping cart management
- Quantity controls
- Price calculations
- Remove items functionality

### Checkout.jsx
- Shipping information form
- Order summary
- Payment method selection
- Order confirmation

## 🎨 Design Features

### Modern UI/UX
- **Gradient Backgrounds**: Beautiful gradient designs
- **Hover Effects**: Smooth animations and transitions
- **Card-based Layout**: Clean, organized product display
- **Responsive Grid**: Adapts to different screen sizes
- **Loading States**: User-friendly loading indicators

### Color Scheme
- Primary: Purple gradient (#667eea to #764ba2)
- Secondary: Blue tones
- Background: Light grays and whites
- Text: Dark grays for readability

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The application uses the **FakeStore API** to fetch product data:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Features**: Real product data with images, prices, ratings, and descriptions
- **Categories**: Men's clothing, Women's clothing, Jewelry, Electronics

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience
- **Tablet**: Adapted layout for medium screens
- **Mobile**: Touch-friendly interface

## 🚀 Performance Features

- **Lazy Loading**: Images load efficiently
- **Optimized Images**: Proper sizing and compression
- **Smooth Animations**: CSS transitions for better UX
- **Efficient State Management**: Minimal re-renders

## 🔒 Security Features

- **Input Validation**: Form validation for checkout
- **Safe API Calls**: Proper error handling
- **XSS Prevention**: Sanitized user inputs

## 🎯 Future Enhancements

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Advanced filtering options
- Payment gateway integration
- Order tracking
- Admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Built with ❤️ using modern web technologies.

---

**Snap@Shop** - Your one-stop destination for amazing products!
