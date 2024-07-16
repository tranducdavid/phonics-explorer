import { PhonicsData } from './types'

type PhonicsTableProps = {
  phonicsData: PhonicsData[]
}

export const PhonicsTable = ({ phonicsData }: PhonicsTableProps) => {
  const renderExample = (example: string) => {
    const parts = example.split('**')
    return (
      <>
        {parts.map((part, index) =>
          index % 2 === 1 ? <b key={index}>{part}</b> : part,
        )}
      </>
    )
  }

  return (
    <div
      className="overflow-auto rounded-lg border border-gray-600"
      style={{ maxHeight: 'calc(100vh - 12rem)' }}
    >
      <table className="min-w-full divide-y divide-gray-600">
        <thead className="bg-gray-800 sticky top-0 z-10 rounded-t-lg">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Spelling
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              IPA
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Example
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-700 divide-y divide-gray-600">
          {phonicsData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-600">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                {item.spelling}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                {item.ipa}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                {renderExample(item.example)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
