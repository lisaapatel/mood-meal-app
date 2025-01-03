import React from 'react'
import { MealTypeSelector } from './components/MealTypeSelector/MealTypeSelector'
import { MoodSelector } from './components/MoodSelector/MoodSelector'
import { RecipeList } from './components/RecipeList/RecipeList'
import { useRecipes } from './hooks/useRecipes'

function App() {
  const {
    recipes,
    selectedMealType,
    setSelectedMealType,
    selectedMood,
    setSelectedMood
  } = useRecipes()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Mood-Based Recipe Recommender
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Select a meal type:</h2>
            <MealTypeSelector
              selected={selectedMealType}
              onSelect={setSelectedMealType}
            />

            <h2 className="text-xl mb-4">How are you feeling?</h2>
            <MoodSelector
              selected={selectedMood}
              onSelect={setSelectedMood}
            />
          </div>

          <RecipeList recipes={recipes} />
        </div>
      </div>
    </div>
  )
}

export default App 