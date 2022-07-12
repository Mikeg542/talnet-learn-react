import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';

import Ingredient from '../ingredients/ingredient';

import { styles } from './_styles/mealModalStyles';

const MealModal = ({ meal, handleClose }) => {
    return (
        <Modal open={!!meal} onClose={handleClose}>
            <Box sx={styles.modal}>
                <Box component="h3" sx={styles.ingredientHeader}>
                    {meal?.strMeal}
                </Box>
                {meal && (
                    <Box sx={styles.mealCardBody}>
                        <Box
                            component="img"
                            src={`${meal.strMealThumb}`}
                            sx={styles.image}
                        />
                        <Box sx={styles.ingredientsList}>
                            {[...Array(20)].map((_, i) => (
                                <Ingredient
                                    key={`${meal.idMeal}_ingredient_${i + 1}`}
                                    meal={meal}
                                    index={i}
                                />
                            ))}
                        </Box>
                    </Box>
                )}
            </Box>
        </Modal>
    );
};

MealModal.propTypes = {
    meal: PropTypes.object,
    handleClose: PropTypes.func
};

export default MealModal;
