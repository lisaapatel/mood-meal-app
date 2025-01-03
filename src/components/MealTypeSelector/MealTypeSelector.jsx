import React from 'react'

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack']

export function MealTypeSelector({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {MEAL_TYPES.map(mealType => (
        <button
          key={mealType}
          onClick={() => onSelect(mealType)}
          className={`
            px-4 py-2 rounded-lg capitalize transition-colors
            ${selected === mealType
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
            }
          `}
        >
          {mealType}
        </button>
      ))}
    </div>
  )
} 