import React from "react";
import CartHeader from "./cartHeader";
import CartBg from "./cartBg";
import CartLine from "./cartLine";

export default function Cart({ event, isTrue }) {

  const headerPosition = isTrue ? 'h-[35%]' : 'h-[7%]'

  return (
    <>
    <div className={`${headerPosition} w-[100%] border-2 absolute left-1/2 bottom-0 transform -translate-x-1/2`}>
      <CartHeader event={event}/>
      <CartBg isTrue={isTrue}>
        <CartLine />
        <CartLine />
        <CartLine />
        <CartLine />
      </CartBg>
    </div>
    </>
  );
}
