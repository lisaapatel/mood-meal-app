import React, { useState } from 'react'
import { SearchForm } from './components/SearchForm/SearchForm'
import { RecipeList } from './components/RecipeList/RecipeList'
import { useRecipes } from './hooks/useRecipes'

function App() {
  const [showResults, setShowResults] = useState(false)

  try {
    const {
      recipes,
      selectedMealType,
      setSelectedMealType,
      selectedPreferences,
      setSelectedPreferences,
      selectedIngredients,
      setSelectedIngredients,
      searchRecipes
    } = useRecipes()

    const handleSearch = (searchParams) => {
      searchRecipes(searchParams)
      setShowResults(true)
    }

    return (
      <div className="min-h-screen bg-[#f8f5f2] py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2 text-[#2d2d2d]">
            What's the Vibe for the Meal?
          </h1>
          <p className="text-center text-[#666] mb-6 italic">
            Find the perfect recipe that matches your current mood
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <SearchForm
                mealType={selectedMealType}
                setMealType={setSelectedMealType}
                preferences={selectedPreferences}
                setPreferences={setSelectedPreferences}
                ingredients={selectedIngredients}
                setIngredients={setSelectedIngredients}
                onSubmit={handleSearch}
              />
            </div>

            {showResults && (
              <div className="transition-all duration-300 ease-in-out">
                <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
                  Your Recipe Matches
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RecipeList 
                    recipes={recipes} 
                    onClose={() => setShowResults(false)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error in App:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Something went wrong. Please check the console.</p>
      </div>
    )
  }
}

export default App 