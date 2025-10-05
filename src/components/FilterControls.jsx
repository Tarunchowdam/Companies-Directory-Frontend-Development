import React, { useContext, useState, useEffect } from 'react';
import { CompaniesContext } from '../context/CompaniesContext';

const FilterControls = () => {
    const { companies, setFilteredCompanies } = useContext(CompaniesContext);
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [industry, setIndustry] = useState('');

    // Get unique locations and industries for dropdowns
    const locations = [...new Set(companies.map(c => c.location))];
    const industries = [...new Set(companies.map(c => c.industry))];

    useEffect(() => {
        let filtered = companies;

        if (search) {
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (location) {
            filtered = filtered.filter(c => c.location === location);
        }
        if (industry) {
            filtered = filtered.filter(c => c.industry === industry);
        }

        setFilteredCompanies(filtered);
    }, [search, location, industry, companies, setFilteredCompanies]);

    return (
        <div className="filter-controls" style={{ marginBottom: '1rem' }}>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ marginRight: '1rem' }}
            />
            <select
                value={location}
                onChange={e => setLocation(e.target.value)}
                style={{ marginRight: '1rem' }}
            >
                <option value="">All Locations</option>
                {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                ))}
            </select>
            <select
                value={industry}
                onChange={e => setIndustry(e.target.value)}
            >
                <option value="">All Industries</option>
                {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterControls;