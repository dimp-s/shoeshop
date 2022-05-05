import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { saveShippingAddress } from '../redux/actions/CartActions';

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = React.useState(shippingAddress.address);
  const [city, setCity] = React.useState(shippingAddress.city);
  const [postalCode, setPostalCode] = React.useState(
    shippingAddress.postalCode
  );
  // const [country, setCountry] = React.useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode }));
    history.push('/payment');
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type="text"
            required
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter postal code"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          {/* <input type="text" placeholder="Enter country" /> */}
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
