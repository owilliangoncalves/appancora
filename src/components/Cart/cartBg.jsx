import React from "react";
import CartLine from "./cartLine";

export default function cartBg({ children, mostraBg }) {
    if(mostraBg){
  return (
    <div className={`w-[100%] h-80 bg-white flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2`}>
      {children}
    </div>
  );
}
else{
   return <div className={`bg-transparent`}>
   
 </div>
}
}
