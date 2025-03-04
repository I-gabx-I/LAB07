import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "High performance laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description: "Latest smartphone model",
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    description: "Noise-cancelling headphones",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 250,
    description: "Smartwatch with health tracking",
  },
];

const ProductList: React.FC = () => {
  return (
    <Grid container spacing={3} padding={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">Price: ${product.price}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                component={Link}
                to={`/product/${product.id}`}
                color="primary"
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
