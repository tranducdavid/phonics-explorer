import { Field, Input } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { NavBar } from './NavBar'
import { PhonicsTable } from './PhonicsTable'
import { phonicsData } from './constants'

export const App = () => {
  const [word, setWord] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  return (
    <div className="text-gray-100 bg-gray-700 min-h-screen">
      <NavBar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Field>
          <Input
            value={word}
            onChange={handleInputChange}
            placeholder="Your word"
            className={clsx(
              'mt-3 mb-8 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            )}
          />
        </Field>
        <PhonicsTable phonicsData={phonicsData} />
      </div>
    </div>
  )
}
