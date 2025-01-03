import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'

export function RecipeList({ recipes, onClose }) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-xl shadow-sm">
        <p className="text-gray-500 text-lg mb-4">
          No recipes found. Try different selections!
        </p>
        <button
          onClick={onClose}
          className="text-[#2d2d2d] hover:text-[#1a1a1a] underline"
        >
          Go back
        </button>
      </div>
    )
  }

  return (
    <>
      {recipes.map(recipe => (
        recipe ? <RecipeCard key={recipe.id} recipe={recipe} /> : null
      ))}
    </>
  )
} 