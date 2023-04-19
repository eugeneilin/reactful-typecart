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
  const { getItemQuantity, increaseCartQuantity, openCart } = useShoppingCart();

  const quantity = getItemQuantity(id);

  function handleAddToCart() {
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
          <Button className='w-100 not-cursive' onClick={() => handleAddToCart()}>
            {quantity === 0 ? '+ Add To Cart' : 'In Cart'}
            {/* disable button conditionally */}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
