import React, { useState } from 'react'

const MEAL_PREFERENCES = [
  { 
    id: 'light', 
    emoji: '🥗', 
    label: 'Light & Fresh',
    tooltip: 'Low-calorie meals with fresh ingredients, perfect for a light appetite'
  },
  { 
    id: 'hearty', 
    emoji: '🍖', 
    label: 'Hearty & Filling',
    tooltip: 'Substantial meals that will keep you satisfied for hours'
  },
  { 
    id: 'healthy', 
    emoji: '🥑', 
    label: 'Healthy & Nutritious',
    tooltip: 'Nutrient-rich meals focused on wholesome ingredients'
  },
  { 
    id: 'comfort', 
    emoji: '🍲', 
    label: 'Comfort Food',
    tooltip: 'Classic comfort dishes that feel like a warm hug'
  },
  { 
    id: 'soup', 
    emoji: '🥣', 
    label: 'Soup & Stew',
    tooltip: 'Warming soups, stews, and broths'
  },
  { 
    id: 'carby', 
    emoji: '🍝', 
    label: 'Carb-Rich',
    tooltip: 'Pasta, rice, and other carbohydrate-focused dishes'
  },
  { 
    id: 'guilty', 
    emoji: '🍕', 
    label: 'Guilty Pleasure',
    tooltip: 'Indulgent treats and comfort classics'
  },
  { 
    id: 'protein', 
    emoji: '🥩', 
    label: 'Protein-Rich',
    tooltip: 'High-protein meals for energy and satiety'
  },
  { 
    id: 'spicy', 
    emoji: '🌶️', 
    label: 'Spicy',
    tooltip: 'Dishes with a kick of heat and bold flavors'
  },
  { 
    id: 'quick', 
    emoji: '⚡', 
    label: 'Quick & Easy',
    tooltip: 'Ready in 30 minutes or less'
  }
]

const MAX_PREFERENCES = 3

export function MealPreferenceSelector({ selected = [], onSelect }) {
  const [tooltipId, setTooltipId] = useState(null)

  const handlePreferenceToggle = (prefId) => {
    if (selected.includes(prefId)) {
      onSelect(selected.filter(id => id !== prefId))
    } else if (selected.length < MAX_PREFERENCES) {
      onSelect([...selected, prefId])
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {MEAL_PREFERENCES.map(pref => (
          <div key={pref.id} className="relative">
            <button
              onClick={() => handlePreferenceToggle(pref.id)}
              onMouseEnter={() => setTooltipId(pref.id)}
              onMouseLeave={() => setTooltipId(null)}
              disabled={!selected.includes(pref.id) && selected.length >= MAX_PREFERENCES}
              className={`
                flex flex-col items-center p-3 rounded-lg transition-all
                ${selected.includes(pref.id)
                  ? 'bg-[#2d2d2d] text-white ring-2 ring-[#2d2d2d] ring-offset-2'
                  : 'bg-gray-100 hover:bg-gray-200'
                }
                ${!selected.includes(pref.id) && selected.length >= MAX_PREFERENCES
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
                }
              `}
            >
              <span className="text-xl mb-1">{pref.emoji}</span>
              <span className="text-xs text-center whitespace-nowrap">{pref.label}</span>
            </button>
            
            {tooltipId === pref.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10">
                {pref.tooltip}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      {selected.length > 0 && (
        <p className="text-sm text-[#666]">
          {selected.length === MAX_PREFERENCES 
            ? 'Maximum preferences selected'
            : `Select up to ${MAX_PREFERENCES - selected.length} more preference${MAX_PREFERENCES - selected.length !== 1 ? 's' : ''}`
          }
        </p>
      )}
    </div>
  )
} 