import React from 'react'

const MOODS = [
  { id: 'happy', emoji: '😊', label: 'Happy' },
  { id: 'sad', emoji: '😔', label: 'Sad' },
  { id: 'energetic', emoji: '⚡', label: 'Energetic' },
  { id: 'tired', emoji: '😴', label: 'Tired' },
  { id: 'angry', emoji: '😠', label: 'Angry' },
  { id: 'calm', emoji: '😌', label: 'Calm' },
  { id: 'excited', emoji: '🤩', label: 'Excited' },
  { id: 'anxious', emoji: '😰', label: 'Anxious' },
  { id: 'loved', emoji: '🥰', label: 'Loved' },
  { id: 'stressed', emoji: '😫', label: 'Stressed' }
]

const MAX_MOODS = 3

export function MoodSelector({ selected = [], onSelect }) {
  const handleMoodToggle = (moodId) => {
    if (selected.includes(moodId)) {
      // Remove mood if already selected
      onSelect(selected.filter(id => id !== moodId))
    } else if (selected.length < MAX_MOODS) {
      // Add mood if under max limit
      onSelect([...selected, moodId])
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {MOODS.map(mood => (
          <button
            key={mood.id}
            onClick={() => handleMoodToggle(mood.id)}
            disabled={!selected.includes(mood.id) && selected.length >= MAX_MOODS}
            className={`
              flex flex-col items-center p-4 rounded-lg transition-all
              ${selected.includes(mood.id)
                ? 'bg-purple-500 text-white ring-2 ring-purple-600 ring-offset-2'
                : 'bg-gray-100 hover:bg-gray-200'
              }
              ${!selected.includes(mood.id) && selected.length >= MAX_MOODS
                ? 'opacity-50 cursor-not-allowed'
                : ''
              }
            `}
          >
            <span className="text-2xl mb-1">{mood.emoji}</span>
            <span className="text-sm">{mood.label}</span>
          </button>
        ))}
      </div>
      {selected.length > 0 && (
        <p className="text-sm text-gray-600">
          {selected.length === MAX_MOODS 
            ? 'Maximum moods selected'
            : `Select up to ${MAX_MOODS - selected.length} more mood${MAX_MOODS - selected.length !== 1 ? 's' : ''}`
          }
        </p>
      )}
    </div>
  )
} 