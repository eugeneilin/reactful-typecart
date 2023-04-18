export function Home() {
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center cursive text-center'
      style={{
        background: `url(/imgs/6.jpg)` + 'no-repeat center / cover',
        height: '95vh',
        color: '#ffc400',
        textShadow: '2px 2px 2px darkslategrey',
      }}
    >
      <h1 className='mb-4'>Welcome, Chefs!</h1>
      <p className='fs-4'>
        Discover our assortment of enchanting culinary pens, filled with endless ink.
      </p>
    </div>
  );
}
