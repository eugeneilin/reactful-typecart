import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, openCart } =
    useShoppingCart();

  const quantity = getItemQuantity(id);

  function handleClick() {
    increaseCartQuantity(id);
    openCart();
  }

  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={imgUrl} height='200px' style={{ objectFit: 'cover' }} />
      <Card.Body className='d-flex flex-column cursive'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-3 mb-3'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button className='w-100 not-cursive' onClick={() => handleClick()}>
              + Add To Cart
            </Button>
          ) : (
            <div className='d-flex flex-column align-items-center' style={{ gap: '.5rem' }}>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className='fs-3'>{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                className='not-cursive'
                onClick={() => removeFromCart(id)}
                variant='danger'
                size='sm'
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
