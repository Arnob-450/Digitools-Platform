


const Cart = ({ cartItems, setCartItems }) => {
    console.log(cartItems);
    

    return (
        <div>
            <div className="border-2 border-gray-200 rounded-3xl p-10">
                <h1 className="text-3xl font-bold mb-6
                ">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-gray-300 flex justify-center items-center text-3xl font-bold" >Your cart is empty</p>
                ) : null}
                {cartItems.map((item, index) => (
                    <div>
                        <div key={index} className="flex items-center justify-between  rounded-4xl p-4 mb-4 bg-gray-100">
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center border-2 border-gray-300 p-3 rounded-full"><img src={item.icon} alt="" /></div>
                                <div className="">
                                    <h2 className="text-lg font-bold">{item.name}</h2>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))} className="text-red-500">Remove</button>
                            </div>
                        </div>

                    </div>

                ))}
                <div className="flex justify-between p-3">
                    <p className=" text-2xl text-gray-400">Total:</p>
                    <h1 className="font-bold text-2xl">${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h1>
                </div>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-4xl py-6" onClick={() => { setCartItems([]); }}>Proceed to Checkout</button>
                
            </div>
            
        </div>
    );
};

export default Cart;