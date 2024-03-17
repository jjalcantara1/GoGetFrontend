import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PromoCrudScreen = () => {
    const [promos, setPromos] = useState([]);
    const [newPromo, setNewPromo] = useState({
        code: '',
        discount: 0,
        start_date: '',
        end_date: '',
        max_redemptions: 1,
        description: ''
    });

    // Function to fetch promo codes from backend
    const fetchPromos = async () => {
        try {
            const response = await axios.get('/api/promos/');
            setPromos(response.data);
        } catch (error) {
            console.error('Error fetching promo codes:', error);
        }
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {  
        const { name, value } = e.target;
        setNewPromo({ ...newPromo, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/promos/', newPromo);
            fetchPromos(); // Refresh the promo list after adding a new promo
            // Clear the form fields
            setNewPromo({
                code: '',
                discount: 0,
                start_date: '',
                end_date: '',
                max_redemptions: 1,
                description: ''
            });
        } catch (error) {
            console.error('Error creating promo code:', error);
        }
    };

    // Function to handle deleting a promo
    const handleDelete = async (promoId) => {
        try {
            await axios.delete(`/api/promos/${promoId}/`);
            fetchPromos(); // Refresh the promo list after deletion
        } catch (error) {
            console.error('Error deleting promo code:', error);
        }
    };

    // Function to render promo code list
    const renderPromoCodes = () => {
        return promos.map(promo => (
            <div key={promo.id} className="card" style={{ marginBottom: '.5rem' }}>
                <div className="card-body" style={{padding: '1rem'}}>
                    <div>
                        <h5 className="card-title">{promo.code}</h5>
                        <p className="card-text">Discount: {promo.discount}</p>
                        <p className="card-text">Start Date: {promo.start_date}</p>
                        <p className="card-text">End Date: {promo.end_date}</p>
                        <p className="card-text">Max Redemptions: {promo.max_redemptions}</p>
                        <p className="card-text">Times Redeemed: {promo.times_redeemed}</p>
                        <p className="card-text">Description: {promo.description}</p>
                    </div>
                    <div>
                        <button className="btn btn-danger" onClick={() => handleDelete(promo.id)}>Delete</button>
                    </div>
                </div>
            </div>
        ));
    };

    useEffect(() => {
        fetchPromos();
    }, []);

    return (
        <div>
            <div>
                <h3>Create New Promo Code</h3>
                <form onSubmit={handleSubmit}>
                    <label>Code:</label>
                    <input type="text" name="code" value={newPromo.code} onChange={handleInputChange} required /><br />
                    <label>Discount:</label>
                    <input type="number" name="discount" value={newPromo.discount} onChange={handleInputChange} required /><br />
                    <label>Start Date:</label>
                    <input type="datetime-local" name="start_date" value={newPromo.start_date} onChange={handleInputChange} required /><br />
                    <label>End Date:</label>
                    <input type="datetime-local" name="end_date" value={newPromo.end_date} onChange={handleInputChange} required /><br />
                    <label>Max Redemptions:</label>
                    <input type="number" name="max_redemptions" value={newPromo.max_redemptions} onChange={handleInputChange} required /><br />
                    <label>Description:</label>
                    <input type="text" name="description" value={newPromo.description} onChange={handleInputChange} /><br />
                    <button type="submit" className="btn btn-primary">Create Promo Code</button>
                </form>
            </div>
            <div>
                <h3>Promo Code List</h3>
                <Link to={`/editPromo`} className="btn btn-primary" style={{ marginRight: '.5rem' }}>
                        <i className="fas fa-edit" style={{ marginRight: '0.25rem' }}></i>Edit
                </Link>
                {renderPromoCodes()}
            </div>
        </div>
    );
};

export default PromoCrudScreen;
