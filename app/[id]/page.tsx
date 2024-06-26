'use client'

import Item from '@/components/Item'
import { getItemsByCategory, groupItemsByCategory } from '@/data'
import Link from 'next/link'
import { FaHouse } from 'react-icons/fa6'

export interface IItem {
  category: string
  item: string
  price: number
  image: string
}

export default function Category({ params }: { params: { id: string } }) {
  const { id } = params

  const itemId = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
  }

  const items = getItemsByCategory(id?.replaceAll('-', ' '))

  const groups = groupItemsByCategory() as IItem[][]

  return (
    <main
      className='max-w-6xl mx-auto py-5 px-2 md:p-5'
      style={{
        scrollbarColor: 'red blue',
      }}
    >
      <div className='flex flex-wrap gap-y-5 mt-5 md:mt-55 w-full md:w-[75%] lg:w-1/2 mx-auto duration-1000 relative pt-20'>
        <div className='fixed top-0 right-0 left-0 z-10 w-[97%] md:w-[75%] lg:w-1/2 mx-auto h-16 flex items-center justify-start md:justify-center bg-white shadow-2xl m-2 rounded-full overflow-auto  px-2'>
          <Link href={`/`} className='btn btn-ghost text-gray-800 rounded-full'>
            <FaHouse className='text-xl text-my-primary ms-2' />
          </Link>

          {groups.map((group, i: number) => (
            <Link
              key={i}
              href={`/${itemId(group[0].category)}`}
              className='btn btn-xs btn-ghost text-gray-800 rounded-full underline'
            >
              {group[0].category?.toUpperCase()}
            </Link>
          ))}
        </div>

        <h2 className='uppercase text-my-primary font-bold'>
          {items[0]?.category}
        </h2>
        {items.map((item, i: number) => (
          <div
            key={i}
            className='w-full mx-auto'
            style={{ scrollMarginTop: '100px' }}
          >
            <Item item={item} />
          </div>
        ))}
      </div>
    </main>
  )
}
