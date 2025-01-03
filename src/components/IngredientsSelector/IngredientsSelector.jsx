import React, { useState } from 'react'

export function IngredientsSelector({ ingredients, onIngredientsChange }) {
  const [inputValue, setInputValue] = useState('')
  
  const handleAddIngredient = () => {
    if (inputValue.trim()) {
      onIngredientsChange([...ingredients, inputValue.trim().toLowerCase()])
      setInputValue('')
    }
  }

  const handleRemoveIngredient = (ingredient) => {
    onIngredientsChange(ingredients.filter(i => i !== ingredient))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddIngredient()
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type an ingredient and press Enter"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleAddIngredient}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {ingredients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {ingredients.map(ingredient => (
            <span
              key={ingredient}
              className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-2"
            >
              {ingredient}
              <button
                onClick={() => handleRemoveIngredient(ingredient)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
} 