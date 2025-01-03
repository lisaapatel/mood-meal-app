import React, { useState } from 'react'

export function RecipeCard({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!recipe) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {recipe.prepTime} mins
          </span>
          <span className="capitalize">{recipe.difficulty}</span>
          {recipe.cuisine && (
            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
              {recipe.cuisine}
            </span>
          )}
          {recipe.isVegetarian && (
            <span className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Vegetarian
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.mealType && recipe.mealType.map(type => (
            <span key={type} className="px-2 py-1 bg-[#f8f5f2] text-[#2d2d2d] rounded-full text-sm capitalize">
              {type}
            </span>
          ))}
          {recipe.preferences && recipe.preferences.map(pref => (
            <span key={pref} className="px-2 py-1 bg-[#f0ebe6] text-[#2d2d2d] rounded-full text-sm capitalize">
              {pref}
            </span>
          ))}
        </div>

        {recipe.recipeLink && (
          <a
            href={recipe.recipeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 text-blue-500 hover:text-blue-700 underline"
          >
            View Full Recipe
          </a>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-700"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>

        {isExpanded && (
          <div className="mt-4">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Ingredients:</h4>
              <ul className="list-disc list-inside space-y-1">
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside space-y-1">
                {recipe.instructions && recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 