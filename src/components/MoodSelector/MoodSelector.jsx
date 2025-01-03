import React from 'react'

const MOODS = [
  { id: 'happy', emoji: '😊', label: 'Happy' },
  { id: 'sad', emoji: '😔', label: 'Sad' },
  { id: 'energetic', emoji: '⚡', label: 'Energetic' },
  { id: 'tired', emoji: '😴', label: 'Tired' }
]

export function MoodSelector({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {MOODS.map(mood => (
        <button
          key={mood.id}
          onClick={() => onSelect(mood.id)}
          className={`
            flex flex-col items-center p-4 rounded-lg transition-colors
            ${selected === mood.id
              ? 'bg-purple-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
            }
          `}
        >
          <span className="text-2xl mb-1">{mood.emoji}</span>
          <span className="text-sm">{mood.label}</span>
        </button>
      ))}
    </div>
  )
} 