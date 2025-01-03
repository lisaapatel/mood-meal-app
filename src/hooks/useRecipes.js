import { useState } from 'react'
import recipeData from '../data/recipes.json'

export function useRecipes() {
  const [selectedMealType, setSelectedMealType] = useState(null)
  const [selectedPreferences, setSelectedPreferences] = useState([])
  const [isVegetarianOnly, setIsVegetarianOnly] = useState(false)
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [searchResults, setSearchResults] = useState(recipeData.recipes || [])

  console.log('Initial recipes:', recipeData.recipes) // Debug log

  const searchRecipes = ({ mealType, preferences, ingredients = [] }) => {
    console.log('Searching with:', { mealType, preferences, ingredients }) // Debug log

    const filtered = recipeData.recipes.filter(recipe => {
      // Match meal type exactly
      const mealTypeMatch = !mealType || recipe.mealType.includes(mealType)
      
      // Match if recipe has ANY of the selected preferences
      const preferenceMatch = preferences.length === 0 || 
        preferences.some(pref => recipe.preferences?.includes(pref))

      // Match dietary preference if selected
      const dietMatch = isVegetarianOnly ? recipe.isVegetarian : true

      // Match ingredients if any are selected
      const ingredientsMatch = ingredients.length === 0 || 
        ingredients.every(ingredient =>
          recipe.ingredients.some(recipeIngredient =>
            recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
          )
        )

      return mealTypeMatch && preferenceMatch && dietMatch && ingredientsMatch
    })

    console.log('Filtered results:', filtered) // Debug log
    setSearchResults(filtered)
  }

  return {
    recipes: searchResults,
    selectedMealType,
    setSelectedMealType,
    selectedPreferences,
    setSelectedPreferences,
    isVegetarianOnly,
    setIsVegetarianOnly,
    selectedIngredients,
    setSelectedIngredients,
    searchRecipes
  }
} 