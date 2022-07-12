import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const Ingredient = ({ meal, index }) => {
    const ingredient = meal[`strIngredient${index + 1}`];
    const measurement = meal[`strMeasure${index + 1}`];

    return (
        ingredient &&
        measurement && (
            <Box component="span" sx={{ paddingBottom: '8px' }}>
                {ingredient}: {measurement}
            </Box>
        )
    );
};

Ingredient.prototypes = {
    meal: PropTypes.object,
    index: PropTypes.number
};

export default Ingredient;
