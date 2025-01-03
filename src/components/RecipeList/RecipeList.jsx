import React from 'react'
import { RecipeCard } from '../RecipeCard/RecipeCard'

export function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">
          No recipes found for your selection. Try different criteria!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
} 