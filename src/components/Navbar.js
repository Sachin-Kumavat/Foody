import React, { useState } from 'react'
import "../css/Navbar.css"
const Navbar = ({ onCategoryChange, onInputChange, onAddItemData }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const handleCategory = (category) => {
        console.log(category)
        onCategoryChange(category)
    }

    function handleInput(input) {
        console.log("Input string is :", input)
        onInputChange(input)
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);
        // console.log(typeof data)
        onAddItemData(data)
        handleModalClose(); // Close modal after submission
      };
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-title">
                        <div className="title-foody">
                            <span className="title-white">F</span>
                            <span className="title-red">oo</span>
                            <span className="title-white">dy</span>
                        </div>
                        <div className="title-zone">
                            <span className="title-white">Z</span>
                            <span className="title-red">o</span>
                            <span className="title-white">n</span>
                            <span className="title-white">e</span>
                        </div>
                    </div>
                    <div className="navbar-search">
                        <input type="text" placeholder="Search Food..." onChange={(e) => handleInput(e.target.value)} className="search-input" />
                    </div>
                </div>
                <div className="nav-btns" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <div className="navbar-buttons">
                        <button className="btn" onClick={() => { handleCategory("All") }}>All</button>
                        <button className="btn" onClick={() => { handleCategory("Breakfast") }}>Breakfast</button>
                        <button className="btn" onClick={() => { handleCategory("Lunch") }}>Lunch</button>
                        <button className="btn" onClick={() => { handleCategory("Dinner") }}>Dinner</button>
                        <button className="btn" onClick={handleModalOpen}>Add Items</button>
                    </div>
                    {/* <div className="add-items" style={{margin: "5px auto"}}>
                        <button className="btn">Add Items</button>
                    </div> */}
                </div>
            </div>



            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-btn" onClick={handleModalClose}>
                            &times;
                        </button>
                        <form onSubmit={handleFormSubmit}>
                            <h2>Add New Product</h2>
                            <div className="form-group">
                                <label htmlFor="productName">Product Name:</label>
                                <input type="text" id="productName" name="productName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea id="description" name="description" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input type="number" id="price" name="price" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imagePath">Image Path:</label>
                                <input type="text" id="imagePath" name="imagePath" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category:</label>
                                <select id="category" name="category" required>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;