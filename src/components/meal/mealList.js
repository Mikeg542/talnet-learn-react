import React, { useState } from 'react';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import axios from 'axios';

import MealModal from './mealModal';

import { styles } from './_styles/mealListStyles';

const MealList = ({ meals }) => {
    const [selectedMeal, setSelectedMeal] = useState(null);

    const handleMealClicked = (meal) => {
        getMeal(meal.idMeal);
    };

    const handleClose = () => {
        setSelectedMeal(null);
    };

    const getMeal = async (mealId) => {
        let result = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        setSelectedMeal(result.data.meals[0]);
    };

    return (
        <>
            <Box sx={styles.mealListContainer}>
                {meals.map((meal) => (
                    <Box
                        key={`${meal.idMeal}_header`}
                        sx={styles.mealHeader}
                        onClick={() => handleMealClicked(meal)}
                    >
                        {meal.strMeal}
                    </Box>
                ))}
            </Box>
            <MealModal meal={selectedMeal} handleClose={handleClose} />
        </>
    );
};

MealList.prototypes = {
    meals: PropTypes.array
};

export default MealList;
