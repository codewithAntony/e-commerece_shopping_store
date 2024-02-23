import React, { createContext } from "react";
import all_products from '../../public/assets/all_product';

export const ShopContext = createContext(null);

const shopContextProvider = (props) => {

    const contextValue = {all_products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default shopContextProvider;