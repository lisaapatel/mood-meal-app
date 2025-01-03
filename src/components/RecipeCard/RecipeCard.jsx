import React, { useState } from 'react'

export function RecipeCard({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.mealType.map(type => (
            <span key={type} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize">
              {type}
            </span>
          ))}
          {recipe.moods.map(mood => (
            <span key={mood} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm capitalize">
              {mood}
            </span>
          ))}
        </div>

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
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside space-y-1">
                {recipe.instructions.map((step, index) => (
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