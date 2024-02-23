import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import PropTypes from 'prop-types';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '/assets/dropdown_icon.png';
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);

    return (
        <div className='shop-category'>
            <img src={props.banner} alt="men" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span>out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        
        </div>
    )
}

ShopCategory.propTypes = {
    category: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired
}
export default ShopCategory
