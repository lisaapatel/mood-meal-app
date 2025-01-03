import { useState, useMemo } from 'react'
import recipeData from '../data/recipes.json'

export function useRecipes() {
  const [selectedMealType, setSelectedMealType] = useState(null)
  const [selectedMood, setSelectedMood] = useState(null)

  const filteredRecipes = useMemo(() => {
    return recipeData.recipes.filter(recipe => {
      const mealTypeMatch = !selectedMealType || recipe.mealType.includes(selectedMealType)
      const moodMatch = !selectedMood || recipe.moods.includes(selectedMood)
      return mealTypeMatch && moodMatch
    })
  }, [selectedMealType, selectedMood])

  return {
    recipes: filteredRecipes,
    selectedMealType,
    setSelectedMealType,
    selectedMood,
    setSelectedMood
  }
} 