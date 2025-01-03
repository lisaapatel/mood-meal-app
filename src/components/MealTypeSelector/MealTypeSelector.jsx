import React from 'react'

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack']

export function MealTypeSelector({ selected, onSelect }) {
  const handleSelect = (mealType) => {
    // Toggle selection
    onSelect(selected === mealType ? null : mealType)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {MEAL_TYPES.map(mealType => (
          <button
            key={mealType}
            onClick={() => handleSelect(mealType)}
            className={`
              px-4 py-2 rounded-lg capitalize transition-all
              ${selected === mealType
                ? 'bg-blue-500 text-white ring-2 ring-blue-600 ring-offset-2'
                : 'bg-gray-100 hover:bg-gray-200'
              }
            `}
          >
            {mealType}
          </button>
        ))}
      </div>
      {selected && (
        <button
          onClick={() => onSelect(null)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear selection
        </button>
      )}
    </div>
  )
} 