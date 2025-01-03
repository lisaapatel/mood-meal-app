import React from 'react'
import { MealTypeSelector } from '../MealTypeSelector/MealTypeSelector'
import { MealPreferenceSelector } from '../MealPreferenceSelector/MealPreferenceSelector'
import { IngredientsSelector } from '../IngredientsSelector/IngredientsSelector'

export function SearchForm({ 
  mealType, 
  setMealType, 
  preferences,
  setPreferences,
  ingredients,
  setIngredients,
  onSubmit 
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ mealType, preferences, ingredients })
  }

  const handleReset = () => {
    setMealType(null)
    setPreferences([])
    setIngredients([])
  }

  const isValid = mealType && preferences.length > 0

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-medium text-[#2d2d2d] mb-3">When are you eating?</h2>
          <MealTypeSelector
            selected={mealType}
            onSelect={setMealType}
          />
        </div>

        <div>
          <h2 className="text-lg font-medium text-[#2d2d2d] mb-3">
            Have specific ingredients? <span className="text-sm text-[#666] font-normal">(Optional)</span>
          </h2>
          <IngredientsSelector
            ingredients={ingredients}
            onIngredientsChange={setIngredients}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium text-[#2d2d2d] mb-3">What kind of meal?</h2>
        <MealPreferenceSelector
          selected={preferences}
          onSelect={setPreferences}
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={!isValid}
          className={`
            flex-1 px-6 py-3 rounded-lg font-medium transition-all
            ${isValid
              ? 'bg-[#2d2d2d] text-white hover:bg-[#1a1a1a]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          Find Recipes
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-3 rounded-lg text-[#2d2d2d] hover:bg-gray-100 border border-[#2d2d2d]"
        >
          Reset
        </button>
      </div>
    </form>
  )
} 