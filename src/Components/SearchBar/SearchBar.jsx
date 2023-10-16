import { useFormik } from "formik";
import React from "react";

export default function SearchBar() {

  

  return (
<>
   
</>
  );
}
/**
 * import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://ecommerce.routemisr.com/api/v1/products');
      setData(result.data);
    };
    fetchData();
  }, []);

  // Filter data based on search query
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="w-100">
        <div className="mb-3">
          <input
            id="title"
            name="title"
            type="text"
            className="form-control fw-bold"
            placeholder="Searching for...."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn bg-main w-25 text-white fw-bolder"
          >
            Search
          </button>
        </div>
      </div>
      {filteredData.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;

 */