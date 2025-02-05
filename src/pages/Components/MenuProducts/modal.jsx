import React from "react";
import ReactDom from "react-dom";

import { DtravesiaContext } from "../../../Context";

function Modal({ children  }) {
    const {openModal } = React.useContext(DtravesiaContext)
    return ReactDom.createPortal(

        <div id="default-modal"  className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 
        left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-rgb bg-black bg-opacity-80 flex 
          ${openModal? "bg-fadeIn":"bg-fadeOut"}` }
        
        >
            {children}
        </div>,
        document.getElementById('modal')
    )
};

export { Modal }