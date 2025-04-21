import { useEffect, useState } from "react";
import './Grocery.css';

const Grocery = () => {
    const [items, setItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const fetchGrocery = async () => {
        try {
            const response = await fetch("http://localhost:3000/grocery");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setItems(data);
            setVisibleItems(data.slice(0, 6));
        } catch (error) {
            console.error('Error fetching grocery items:', error);
        }
    };

    useEffect(() => {
        fetchGrocery();
    }, []);

    const toggleView = () => {
        if (showAll) {
            // Show only first 6
            setVisibleItems(items.slice(0, 4));
        } else {
            // Show all
            setVisibleItems(items);
        }
        setShowAll(!showAll);
    };

    return (
        <>
            <div className="item-header">
                <h3 className="item-heading">Grocery</h3>
                <button className="view-item-btn" onClick={toggleView}>
                    {showAll ? "Show Less" : "View All"}
                </button>
            </div>

            <div className="grocery-container">
                {visibleItems.map(item => (
                    <div key={item.id} className="items-container">
                        <img src={item.product_photo} className="items-img" alt="item-img" />
                        <p className="items-title">{item.product_title}</p>
                        {/* <p>Rating : {item.product_star_rating}</p>
                        <p>Sales Volume : {item.sales_volume}</p> */}

                        <div className="price-cart-row">
                            <p style={{ margin: 0 }}>Price: {item.product_price}</p>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Grocery;
