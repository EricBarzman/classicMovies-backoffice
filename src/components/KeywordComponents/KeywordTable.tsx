import { KeywordSentDto } from '@/types/movies.type'
import Link from 'next/link'

function KeywordTable({ id, keyword }: { id : string, keyword: KeywordSentDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Label</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-gray-500 p-3'>{keyword.label}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/movies/keywords/edit/${id}`}>Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default KeywordTable