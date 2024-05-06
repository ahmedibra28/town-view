import React from 'react'
import BlurImage from './BlurImage'

const Category = ({ label }: { label: string }) => {
  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/town-view/'

  const categories = [
    { label: 'HOT DRINKS', image: baseUrl + '283A0111.JPG' },
    { label: 'Limonade', image: baseUrl + '283A0211.JPG' },
    { label: 'MOJITO', image: baseUrl + '283A0214.JPG' },
    { label: 'FRAPPES', image: baseUrl + 'DSC00059.JPG' },
    { label: 'Ice Tea', image: baseUrl + 'DSC00047.JPG' },
    { label: 'Ice Latte ', image: baseUrl + 'DSC00017.JPG' },
    { label: 'Smothies', image: baseUrl + 'DSC00137.JPG' },
    { label: 'Fresh Choice', image: baseUrl + '283A0173.JPG' },
    { label: 'Shakes', image: baseUrl + '283A0195.JPG' },
    { label: 'Dinner', image: baseUrl + '283A0304.JPG' },
    { label: 'Pastries and cakes', image: baseUrl + 'DSC00076.JPG' },
    { label: 'Lunch', image: baseUrl + 'DSC00096.JPG' },
    { label: 'Breakfast', image: baseUrl + 'DSC09982.JPG' },
    { label: 'Pizza', image: baseUrl + '283A0302.JPG' },
  ]

  const item = categories?.find(
    (item) => item.label?.toLowerCase() === label?.toLowerCase()
  )

  return (
    <div className='card h-44 image-full relative shadow-2xl'>
      <figure>
        <BlurImage
          src={item?.image!}
          alt={label}
          width={500}
          height={500}
          className='rounded-xl w-full h-44  shadow-xl'
          objectFit='cover'
        />
      </figure>
      <div className='card-body flex justify-center items-center bg-black/50 z-50 rounded-xl'>
        <h2 className='card-title text-white font-bold uppercase'>
          {item?.label}
        </h2>
      </div>
    </div>
  )
}

export default Category
