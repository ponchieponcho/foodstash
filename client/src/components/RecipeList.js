import React from 'react';
import RecipeCard from './RecipeCard';

let RecipeList = ({ recipes }) =>
    <div className="recipe-list">
        {products.map(recipe =>
            <RecipeCard recipe={recipe} />
        )}
    </div>

export default RecipeList;