import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
  Paper
} from '@mui/material';
import {
  LocalShipping as ShippingIcon,
  AttachMoney as MoneyIcon,
  Security as SecurityIcon,
  Star as StarIcon,
  ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';

const Home = () => {
  const features = [
    {
      icon: <ShippingIcon sx={{ fontSize: 40 }} />,
      title: "Fast Delivery",
      description: "Get your products delivered quickly and safely"
    },
    {
      icon: <MoneyIcon sx={{ fontSize: 40 }} />,
      title: "Best Prices",
      description: "Competitive prices on all our products"
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Secure Shopping",
      description: "Safe and secure payment options"
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: "Quality Products",
      description: "Handpicked products for your satisfaction"
    }
  ];

  const categories = [
    {
      name: "men's clothing",
      label: "Men's Clothing",
      icon: "👔",
      path: "/shop?category=men's%20clothing"
    },
    {
      name: "women's clothing",
      label: "Women's Clothing",
      icon: "👗",
      path: "/shop?category=women's%20clothing"
    },
    {
      name: "jewelery",
      label: "Jewelry",
      icon: "💍",
      path: "/shop?category=jewelery"
    },
    {
      name: "electronics",
      label: "Electronics",
      icon: "📱",
      path: "/shop?category=electronics"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Welcome to Snap@Shop
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Discover amazing products at unbeatable prices
              </Typography>
              <Button
                component={Link}
                to="/shop"
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  }
                }}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  fontSize: '120px',
                  opacity: 0.8
                }}
              >
                🛍️
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Why Choose Snap@Shop?
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Shop by Category
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.name}>
              <Card
                component={Link}
                to={category.path}
                sx={{
                  height: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ fontSize: '48px', mb: 2 }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6" component="h3">
                    {category.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Paper
        sx={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          py: 6
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Ready to Start Shopping?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Explore our wide range of products and find what you're looking for
            </Typography>
            <Button
              component={Link}
              to="/shop"
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
            >
              Browse Products
            </Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home; 