import React from 'react';
import Sidebar from '../components/Sidebar';

function Products() {
  return (
    <section className="grid grid-cols-[1fr_4fr]">
      <Sidebar />

      <div className="">Products</div>
    </section>
  );
}

export default Products;
