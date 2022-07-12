import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import MealCategoryCard from './mealCategoryCard';

import { styles } from './_styles/mealCategoryContainerStyles';

const MealCategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');

    const filteredCategories = categories.filter((category) =>
        String(category.strCategory)
            .toLocaleLowerCase()
            .startsWith(search.toLocaleLowerCase())
    );

    useEffect(() => {
        getMealCategories();
    }, []);

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    const getMealCategories = async () => {
        const result = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/categories.php'
        );

        setCategories(result.data.categories);
    };

    return (
        <>
            <TextField
                sx={styles.searchField}
                variant="outlined"
                InputProps={{
                    startAdornment: <FontAwesomeIcon icon={faSearch} />
                }}
                value={search}
                InputLabelProps={{ shrink: true }}
                onChange={handleSearchChange}
                label="Search"
            />
            <Box sx={styles.categoryList}>
                {filteredCategories.map((category) => (
                    <MealCategoryCard
                        key={category.idCategory}
                        category={category}
                    />
                ))}
            </Box>
        </>
    );
};

export default MealCategoryContainer;
