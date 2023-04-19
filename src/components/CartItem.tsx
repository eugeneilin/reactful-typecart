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
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: '150px', height: '80px', objectFit: 'cover' }}
        height={50}
      />
      <div className='me-auto'>
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
        <div>
          <div className='d-flex flex-column align-items-center' style={{ gap: '.5rem' }}>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ gap: '.5rem' }}
            >
              {' '}
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className='fs-3'>{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            {/* <Button
                className='not-cursive'
                onClick={() => removeFromCart(id)}
                variant='danger'
                size='sm'
              >
                Remove
              </Button> */}
          </div>
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
}
