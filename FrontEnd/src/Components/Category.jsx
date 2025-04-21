import { useEffect, useState } from 'react'
import './Category.css'

const Category = () => {
    const [categories, setCategories] = useState([])
    const fetchcategories = async () => {
        try {
            const response = await fetch('http://localhost:3000/categories');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }

    }
    useEffect(() => { fetchcategories() }, [])
    console.log(categories)
    return (
        <div className="categoriesWrapper">
          {categories.map(category => (
            <div key={category.id} className="categoryContainer">
              <img
                src={category.categoryimage}
                className="categoryImage"
                alt="categoryImage"
              />
              <span className="categoryName">{category.categoryname}</span>
            </div>
          ))}
        </div>
      );
      
}
export default Category
