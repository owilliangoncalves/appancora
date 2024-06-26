import React, { useState } from "react";
import CartHeader from "./cartHeader";
import CartBg from "./cartBg";
import CartLine from "./cartLine";

export default function Cart({ event, isTrue }) {
  

  return (
    <>
      <div className="w-[80%] h-80 flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <CartHeader event={event} isTrue={isTrue} />
        <CartBg mostraBg={isTrue}>
          <CartLine />
        </CartBg>
      </div>
    </>
  );
}
