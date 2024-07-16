import { Field, Input } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { NavBar } from './NavBar'
import { PhonicsTable } from './PhonicsTable'
import { phonicsData } from './constants'
import { ipaToRegex, spellingToRegex } from './utils'
import _ from 'lodash'

export const App = () => {
  const [spelling, setSpelling] = useState('')
  const handleSpellingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpelling(e.target.value)
  }

  const [ipa, setIpa] = useState('')
  const handleIpaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpa(e.target.value)
  }

  const dataWithRegexes = _.sortBy(
    phonicsData.map((data) => ({
      ...data,
      spellingRegex: spellingToRegex(data.spelling),
      ipaRegex: ipaToRegex(data.ipa.replaceAll('/', '')),
    })),
    ['spelling', 'ipa'],
  )

  return (
    <div className="text-gray-100 bg-gray-700 min-h-screen">
      <NavBar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Field>
          <Input
            value={spelling}
            onChange={handleSpellingChange}
            placeholder="Search spelling"
            className={clsx(
              'mb-2 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            )}
          />
        </Field>
        <Field>
          <Input
            value={ipa}
            onChange={handleIpaChange}
            placeholder="Search IPA"
            className={clsx(
              'mb-4 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            )}
          />
        </Field>
        <PhonicsTable
          phonicsData={
            !spelling && !ipa
              ? dataWithRegexes
              : dataWithRegexes.filter(
                  ({ spellingRegex, ipaRegex }) =>
                    (!spelling || spellingRegex.test(spelling)) &&
                    (!ipa || ipaRegex.test(ipa)),
                )
          }
        />
      </div>
    </div>
  )
}
