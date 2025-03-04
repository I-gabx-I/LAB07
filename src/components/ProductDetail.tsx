import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

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

const ProductDetail: React.FC<{ addToCart: () => void }> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [added, setAdded] = useState(false);

  if (!product) return <h1>Product Not Found</h1>;

  const handleAddToCart = () => {
    addToCart();
    setAdded(true);
    setTimeout(() => navigate("/products"), 1000);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6" color="primary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        {added && (
          <Typography color="success.main">✔ Added Successfully</Typography>
        )}
        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            ADD TO CART
          </Button>
          <Button variant="outlined" component={Link} to="/products">
            BACK TO PRODUCTS
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
