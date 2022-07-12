import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Card, CardContent, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClose,
    faSortAlphaDesc,
    faSortAlphaUp
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import axios from 'axios';

import MealList from '../meal/mealList';

const MealCategoryCard = ({ category }) => {
    const [meals, setMeals] = useState([]);
    const [sort, setSort] = useState(true);

    const getFoods = async () => {
        let result = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
        );

        setMeals(result.data.meals);
    };

    const handleCloseMeals = () => {
        setMeals([]);
    };

    const handleSort = () => {
        let sortFactor = 1;
        if (sort) {
            sortFactor = -1;
        }
        setMeals((prev) =>
            [...prev].sort(
                (a, b) => a.strMeal.localeCompare(b.strMeal) * sortFactor
            )
        );
        setSort((prev) => !prev);
    };

    return (
        <Card sx={{ width: 700, marginTop: '16px' }}>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ cursor: 'pointer' }} onClick={getFoods}>
                        {category.strCategory}
                    </Box>

                    {meals?.length > 0 && (
                        <Box>
                            <IconButton
                                sx={{ paddingRight: '8px' }}
                                size="small"
                                onClick={handleSort}
                            >
                                <FontAwesomeIcon
                                    icon={
                                        sort ? faSortAlphaDesc : faSortAlphaUp
                                    }
                                />
                            </IconButton>
                            <IconButton size="small" onClick={handleCloseMeals}>
                                <FontAwesomeIcon icon={faClose} />
                            </IconButton>
                        </Box>
                    )}
                </Box>
                <MealList meals={meals} />
            </CardContent>
        </Card>
    );
};

MealCategoryCard.propTypes = {
    category: PropTypes.object
};

export default MealCategoryCard;
