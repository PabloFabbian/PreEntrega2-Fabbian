import React, { useEffect, useRef } from 'react';
import "./CartItem.css"

const CartItem = ({ id, name, price, quantity, onRemove }) => {
    const cartItemRef = useRef (null)

    useEffect(() => {
        cartItemRef.current.classList.add('fade-in')
    }, [])

    return (
        <div className="cart-item" ref= {cartItemRef}>
            <div className="cart-item-details">
                <h2>{name}</h2>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <div className="cart-item-actions">
                <button onClick={() => onRemove(id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;