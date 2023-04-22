import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) {
    return null;
  }

  return (
    <Stack id='cart-item' direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ height: '80px', width: '100px', objectFit: 'cover' }}
      />
      <div className='me-auto'>
        <div>{item.name}</div>
        <div className='text-muted' style={{ fontSize: '.8rem' }}>
          {formatCurrency(item.price)} each
        </div>
        <div className='d-flex align-items-center justify-content-start'>
          <Button size='sm' onClick={() => decreaseCartQuantity(id)}>
            -
          </Button>
          <span>{quantity}</span>
          <Button size='sm' onClick={() => increaseCartQuantity(id)}>
            +
          </Button>
        </div>
      </div>

      <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
}
