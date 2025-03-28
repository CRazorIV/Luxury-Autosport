import { useState, useEffect, useRef } from 'react';
import carsData from '../data/cars.json';
import './Inventory.css';

const Inventory = () => {
    // Car data from the imported JSON file
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    
    // Search and filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [activeFilters, setActiveFilters] = useState({
        categories: [],
        years: [],
        fuelTypes: []
    });
    
    // State to track which car details are being shown
    const [selectedCar, setSelectedCar] = useState(null);
    
    // State to track if filters are expanded
    const [filtersExpanded, setFiltersExpanded] = useState(false);
    
    // State to track which mobile tab is active
    const [activeTab, setActiveTab] = useState('details');
    
    // Form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    
    // Refs
    const searchResultsRef = useRef(null);
    
    // Available filter options
    const categories = [
        { id: 'sport', label: 'Sports Car', icon: 'fa-car-side' },
        { id: 'suv', label: 'SUV', icon: 'fa-truck' },
        { id: 'sedan', label: '4-Door Sedan', icon: 'fa-car' },
        { id: 'coupe', label: '2-Door Coupe', icon: 'fa-car-alt' },
        { id: 'luxury', label: 'Luxury', icon: 'fa-gem' },
        { id: 'electric', label: 'Electric', icon: 'fa-bolt' }
    ];
    
    const years = ["2023", "2022", "2021", "2020", "2019"];
    
    const fuelTypes = ["Benzine", "Diesel", "Hybrid", "Elektrisch"];
    
    // Car categories mapping (in a real app, this would come from the database)
    const carCategories = {
        "BMW X5": ["suv", "luxury"],
        "Audi A6": ["sedan", "luxury"],
        "Mercedes C-Class": ["sedan", "luxury", "hybrid"],
        "Tesla Model 3": ["sedan", "electric"],
        "Audi R8": ["sport", "coupe", "luxury"],
        "Mercedes G-Wagon": ["suv", "luxury"],
        "Porsche 911 Carrera S": ["sport", "coupe", "luxury"]
    };
    
    // Function to lock/unlock body scroll
    const toggleBodyScroll = (lock) => {
        if (lock) {
            // Save the current scroll position
            const scrollY = window.scrollY;
            // Add styles to lock scrolling
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.dataset.scrollPosition = scrollY;
        } else {
            // Restore the scroll position
            const scrollY = document.body.dataset.scrollPosition || '0';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0'));
            delete document.body.dataset.scrollPosition;
        }
    };
    
    // Lock/unlock body scroll when the car details modal is opened/closed
    useEffect(() => {
        if (selectedCar) {
            toggleBodyScroll(true);
            setActiveTab('details'); // Reset to details tab when opening
        } else {
            toggleBodyScroll(false);
        }
        
        // Cleanup on component unmount
        return () => {
            toggleBodyScroll(false);
        };
    }, [selectedCar]);
    
    // Initialize data
    useEffect(() => {
        // Add categories to each car
        const carsWithCategories = carsData.map(car => ({
            ...car,
            categories: carCategories[car.name] || []
        }));
        
        setCars(carsWithCategories);
        setFilteredCars(carsWithCategories);
    }, []);
    
    // Handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (value.trim() === '') {
            setShowSearchResults(false);
            setSearchResults([]);
            return;
        }
        
        // Search logic
        const results = cars.filter(car => 
            car.name.toLowerCase().includes(value.toLowerCase()) ||
            car.description?.toLowerCase().includes(value.toLowerCase())
        );
        
        setSearchResults(results);
        setShowSearchResults(true);
    };
    
    // Handle search result click
    const handleSearchResultClick = (car) => {
        setSelectedCar(car);
        setShowSearchResults(false);
    };
    
    // Handle filter changes
    const handleFilterChange = (filterType, value) => {
        setActiveFilters(prev => {
            // Toggle the filter value
            const updatedFilters = { ...prev };
            
            if (updatedFilters[filterType].includes(value)) {
                updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
            } else {
                updatedFilters[filterType] = [...updatedFilters[filterType], value];
            }
            
            return updatedFilters;
        });
    };
    
    // Toggle filters expanded state
    const toggleFilters = () => {
        setFiltersExpanded(!filtersExpanded);
    };
    
    // Apply filters
    useEffect(() => {
        let results = [...cars];
        
        // Apply category filters
        if (activeFilters.categories.length > 0) {
            results = results.filter(car => 
                car.categories.some(category => activeFilters.categories.includes(category))
            );
        }
        
        // Apply year filters
        if (activeFilters.years.length > 0) {
            results = results.filter(car => activeFilters.years.includes(car.year));
        }
        
        // Apply fuel type filters
        if (activeFilters.fuelTypes.length > 0) {
            results = results.filter(car => activeFilters.fuelTypes.includes(car.fuel));
        }
        
        // Apply search term
        if (searchTerm.trim() !== '') {
            results = results.filter(car => 
                car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        setFilteredCars(results);
    }, [activeFilters, cars, searchTerm]);
    
    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setShowSearchResults(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    // Close overlay when clicking outside
    const closeOverlay = (e) => {
        if (e.target.classList.contains('car-details-overlay')) {
            setSelectedCar(null);
        }
    };

    // Change active tab
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send this data to your backend
        
        // Show success message
        alert(`Thank you for your inquiry about the ${selectedCar.name}. We will contact you shortly!`);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        
        // Close overlay
        setSelectedCar(null);
    };

    // Clear all filters
    const clearFilters = () => {
        setActiveFilters({
            categories: [],
            years: [],
            fuelTypes: []
        });
        setSearchTerm('');
        setShowSearchResults(false);
    };

    // Count active filters
    const activeFilterCount = 
        activeFilters.categories.length + 
        activeFilters.years.length + 
        activeFilters.fuelTypes.length;

    // Check if device is mobile/tablet
    const isMobileOrTablet = () => {
        return window.innerWidth <= 991;
    };

    return (
        <div className="page-container">
            <h1>Our Vehicle Collection</h1>
            <p>Browse our latest luxury vehicles and find your dream car.</p>
            
            {/* Search and Filter Section */}
            <div className="search-filter-section">
                <div className="search-container">
                    <div className="search-input-wrapper" ref={searchResultsRef}>
                        <input
                            type="text"
                            placeholder="Search by model or description..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                        <button className="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                        
                        {/* Auto-suggest results */}
                        {showSearchResults && searchResults.length > 0 && (
                            <div className="search-results">
                                {searchResults.map(car => (
                                    <div 
                                        className="search-result-item" 
                                        key={car.id}
                                        onClick={() => handleSearchResultClick(car)}
                                    >
                                        <div className="search-result-image">
                                            <img src={car.image} alt={car.name} />
                                        </div>
                                        <div className="search-result-info">
                                            <h4>{car.name}</h4>
                                            <p>{car.year} • {car.fuel}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {showSearchResults && searchResults.length === 0 && (
                            <div className="search-results">
                                <div className="no-results">No vehicles found</div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="filters-header">
                    <button 
                        className="toggle-filters-button" 
                        onClick={toggleFilters}
                        aria-expanded={filtersExpanded}
                    >
                        <span>Filters</span>
                        {activeFilterCount > 0 && (
                            <span className="filter-count">{activeFilterCount}</span>
                        )}
                        <i className={`fas fa-chevron-${filtersExpanded ? 'up' : 'down'}`}></i>
                    </button>
                    
                    {(activeFilters.categories.length > 0 || 
                      activeFilters.years.length > 0 || 
                      activeFilters.fuelTypes.length > 0) && (
                        <button className="clear-filters" onClick={clearFilters}>
                            <i className="fas fa-times"></i> Clear All
                        </button>
                    )}
                </div>
                
                <div className={`filter-container ${filtersExpanded ? 'expanded' : 'collapsed'}`}>
                    <div className="filter-group">
                        <h4>Category</h4>
                        <div className="filter-options">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`filter-option ${activeFilters.categories.includes(category.id) ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('categories', category.id)}
                                >
                                    <i className={`fas ${category.icon}`}></i>
                                    <span>{category.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <h4>Year</h4>
                        <div className="filter-options">
                            {years.map(year => (
                                <button
                                    key={year}
                                    className={`filter-option ${activeFilters.years.includes(year) ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('years', year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <h4>Fuel Type</h4>
                        <div className="filter-options">
                            {fuelTypes.map(fuelType => (
                                <button
                                    key={fuelType}
                                    className={`filter-option ${activeFilters.fuelTypes.includes(fuelType) ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('fuelTypes', fuelType)}
                                >
                                    {fuelType}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Results stats */}
            <div className="results-stats">
                <p>Showing {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}</p>
            </div>

            {/* Car list */}
            <div className="car-list">
                {filteredCars.length === 0 ? (
                    <div className="no-cars-found">
                        <i className="fas fa-car-crash"></i>
                        <h3>No vehicles match your criteria</h3>
                        <p>Try adjusting your filters or search term</p>
                        <button className="reset-search" onClick={clearFilters}>Reset Filters</button>
                    </div>
                ) : (
                    filteredCars.map(car => (
                        <div className="car-card" key={car.id}>
                            <div className="car-image-container">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="car-image"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                                    }}
                                />
                            </div>
                            <div className="car-details">
                                <h2>{car.name}</h2>
                                <p>{car.year} | {car.kilometers} | {car.fuel}</p>
                                <p className="car-price">{car.price}</p>
                                <button onClick={() => setSelectedCar(car)}>More Info</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Car Details Overlay */}
            {selectedCar && (
                <div className="car-details-overlay" onClick={closeOverlay}>
                    <div className="car-details-modal">
                        <button className="close-button" onClick={() => setSelectedCar(null)}>
                            <i className="fas fa-times"></i>
                        </button>
                        
                        {/* Universal tabs for all screen sizes */}
                        <div className="detail-tabs">
                            <button 
                                className={`detail-tab ${activeTab === 'details' ? 'active' : ''}`}
                                onClick={() => handleTabChange('details')}
                            >
                                Vehicle Details
                            </button>
                            <button 
                                className={`detail-tab ${activeTab === 'inquiry' ? 'active' : ''}`}
                                onClick={() => handleTabChange('inquiry')}
                            >
                                Contact Us
                            </button>
                        </div>
                        
                        <div className="car-details-content">
                            <div className={`car-details-left ${activeTab === 'details' ? 'active' : ''}`}>
                                <div className="car-details-image-container">
                                    <img 
                                        src={selectedCar.image} 
                                        alt={selectedCar.name} 
                                        className="car-details-image"
                                    />
                                    <div className="car-category-badges">
                                        {selectedCar.categories.map(category => {
                                            const categoryInfo = categories.find(c => c.id === category);
                                            if (categoryInfo && category !== 'luxury') {
                                                return (
                                                    <span key={category} className={`detail-category-badge ${category}`}>
                                                        <i className={`fas ${categoryInfo.icon}`}></i>
                                                        {categoryInfo.label}
                                                    </span>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                                
                                <div className="car-details-info">
                                    <h2>{selectedCar.name}</h2>
                                    <div className="car-details-badges">
                                        <span className="car-badge year">{selectedCar.year}</span>
                                        <span className="car-badge fuel">{selectedCar.fuel}</span>
                                        <span className="car-badge mileage">{selectedCar.kilometers}</span>
                                    </div>
                                    <p className="car-details-price">{selectedCar.price}</p>
                                    <p className="car-details-description">{selectedCar.description}</p>
                                    
                                    <div className="car-specs">
                                        <h3>Specifications</h3>
                                        <div className="specs-grid">
                                            <div className="spec-item">
                                                <span className="spec-label">Engine</span>
                                                <span className="spec-value">{selectedCar.engine}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Power</span>
                                                <span className="spec-value">{selectedCar.horsepower}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Transmission</span>
                                                <span className="spec-value">{selectedCar.transmission}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Drivetrain</span>
                                                <span className="spec-value">{selectedCar.drivetrain}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="car-colors">
                                        <h3>Available Colors</h3>
                                        <div className="color-options">
                                            {selectedCar.colors.map((color, index) => (
                                                <div className="color-option" key={index}>
                                                    <span className="color-name">{color}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="car-features">
                                        <h3>Key Features</h3>
                                        <ul className="features-list">
                                            {selectedCar.features.map((feature, index) => (
                                                <li key={index}><i className="fas fa-check"></i> {feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Universal contact button */}
                                    <button 
                                        className="tab-navigation-button contact-button"
                                        onClick={() => handleTabChange('inquiry')}
                                    >
                                        Contact Us About This Vehicle <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className={`car-details-right ${activeTab === 'inquiry' ? 'active' : ''}`}>
                                <div className="inquiry-form-container">
                                    <h3>Inquire About This Vehicle</h3>
                                    <p>Complete the form below and our sales team will contact you shortly with more information.</p>
                                    
                                    <form className="inquiry-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name*</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                required 
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address*</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Your email"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Your phone number"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea 
                                                id="message" 
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder={`I'm interested in the ${selectedCar.name} and would like more information.`}
                                                rows="4"
                                            ></textarea>
                                        </div>
                                        
                                        <button type="submit" className="submit-button">
                                            Send Inquiry <i className="fas fa-paper-plane"></i>
                                        </button>
                                    </form>
                                    
                                    <div className="contact-alternative">
                                        <p>Prefer to call? Reach our sales team directly:</p>
                                        <a href="tel:+31612345678" className="phone-number">
                                            <i className="fas fa-phone"></i> +31 6 1234 5678
                                        </a>
                                    </div>
                                    
                                    {/* Universal back button */}
                                    <button 
                                        className="tab-navigation-button back-button"
                                        onClick={() => handleTabChange('details')}
                                    >
                                        <i className="fas fa-arrow-left"></i> Back to Vehicle Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;
