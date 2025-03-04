import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Cart: React.FC<{ cartCount: number }> = ({ cartCount }) => {
  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 4, p: 3 }}>
      <CardContent>
        <Typography variant="h4">Shopping Cart</Typography>
        {cartCount > 0 ? (
          <Typography variant="h6" color="primary">
            You have {cartCount} item(s) in your cart.
          </Typography>
        ) : (
          <Typography variant="h6" color="text.secondary">
            Your cart is empty.
          </Typography>
        )}
        <Button
          variant="contained"
          component={Link}
          to="/products"
          sx={{ mt: 2 }}
        >
          BACK TO PRODUCTS
        </Button>
      </CardContent>
    </Card>
  );
};

export default Cart;
