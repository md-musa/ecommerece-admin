import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Order() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  console.log(id);

  useEffect(() => {
    async function getOrder() {
      try {
        const { data } = await axios.get(`/orders/${id}`);
        console.log('data', data);
        setOrder(data);
      } catch (err) {
        console.log(err);
      }
    }
    getOrder();
  }, []);
  return (
    <div>
      <p>{order.address}</p>
      <p>{order.date}</p>
      <p>{order.status}</p>
      <h3>Products</h3>
      {/* {order.items.map(item => (
        <>
          <p>{item.productId.title}</p>
          <p>{item.productId.brand}</p>
            <img src={item.productId.images[0]} />
        </>
      ))} */}
    </div>
  );
}

export default Order;
