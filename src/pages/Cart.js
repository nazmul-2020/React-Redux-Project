// import React from 'react';
// import ProductCard from '../components/ProductCard';
// import { useProduct } from '../context/ProductProvider';

// const Cart = () => {
//     const {
//         state: { cart, loading, error },
//     } = useProduct();

//     let content;

//     if (loading) {
//         content = <p>Loading ...</p>;
//     }

//     if (error) {
//         content = <p>Something is wrong</p>;
//     }

//     if (!loading && !error && cart.length === 0) {
//         content = <p>Products list is empty</p>
//     }
//     if (!loading && !error && cart.length) {
//         content = cart.map((products) => (
//             <ProductCard key={products._id} products={products} />))
//     }

//     return (

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
//             {content}
//         </div>

//     );
// };

// export default Cart;


import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                cart.sort((a, b) => a._id - b._id)
                    .map((product) => <ProductCard
                        key={product._id}
                        product={product} >
                    </ProductCard>)
            }
        </div>
    );
};

export default Cart;