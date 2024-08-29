import Link from 'next/link'
import Category from '@/components/Category'
import BlurImage from '@/components/BlurImage'
// import { getCategories } from '@/data'

export default async function Home() {
  const slugGenerator = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
  }

  const imageUrl = (image: string) =>
    `https://farshaxan.blr1.cdn.digitaloceanspaces.com/town-view/${image}`

  const images = [
    { label: 'Breakfast', img: imageUrl('DSC09982.JPG') },
    { label: 'Lunch', img: imageUrl('DSC00096.JPG') },
    { label: 'Fast Food', img: imageUrl('DSC07074.JPG') },
    { label: 'Pastries and cakes', img: imageUrl('DSC00076.JPG') },
    { label: 'HOT Drinks', img: imageUrl('283A0111.JPG') },
    { label: 'Cold Drinks', img: imageUrl('283A0207.JPG') },
  ]

  // const cat = await getCategories()
  // const unique = [...new Set(cat)]
  // console.log(unique)

  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <BlurImage
        src={'/logo.png'}
        alt={'logo'}
        width={500}
        height={500}
        className='text-center mx-auto w-72 md:w-96 object-contain'
      />

      <div className='divider divider-secondary text-my-primary text-3xl font-bold my-10'>
        OUR MENU
      </div>

      <div className='flex flex-wrap justify-center items-centers gap-y-5'>
        {images.map((category, i: number) => (
          <div key={i} className='w-[48%] md:w-[30%] lg:w-[19%] mx-auto'>
            <Link href={`/${slugGenerator(category.label)}`}>
              <Category category={category} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
