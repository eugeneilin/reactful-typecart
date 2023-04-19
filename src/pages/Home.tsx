import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center cursive text-center primary-color position-relative'
      style={{
        background: `url(/imgs/6.jpg)` + 'no-repeat center / cover',
        textShadow: '0px 1px 2px var(--dark-color)',
        height: 'calc(100vh - 7.5rem)',
      }}
    >
      <div className='position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50'></div>
      <Container className='position-relative z-index-5'>
        <h1 className='mb-5'>Welcome, Chefs!</h1>
        <p className='fs-4 light-color not-cursive my-3'>
          Discover your perfect endless ink culinary inspiration pen.
        </p>
        <Link to='/store'>
          <Button className='btn-primary not-cursive mt-5 fs-6 py-2'>Begin Shopping</Button>
        </Link>
      </Container>
    </div>
  );
}
