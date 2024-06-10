import Link from 'next/link'
import Category from '@/components/Category'
import BlurImage from '@/components/BlurImage'

export default async function Home() {
  const slugGenerator = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
  }

  const imageUrl = (image: string) =>
    `https://farshaxan.blr1.cdn.digitaloceanspaces.com/town-view/${image}`

  const images = [
    { label: 'HOT DRINKS', img: imageUrl('283A0111.JPG') },
    { label: 'Limonade', img: imageUrl('283A0211.JPG') },
    { label: 'MOJITO', img: imageUrl('283A0214.JPG') },
    { label: 'FRAPPES', img: imageUrl('DSC00059.JPG') },
    { label: 'Ice Tea', img: imageUrl('DSC00047.JPG') },
    { label: 'Ice Latte ', img: imageUrl('DSC00017.JPG') },
    { label: 'Smothies', img: imageUrl('DSC00137.JPG') },
    { label: 'Fresh Choice', img: imageUrl('283A0173.JPG') },
    { label: 'Shakes', img: imageUrl('283A0195.JPG') },
    { label: 'Dinner', img: imageUrl('283A0304.JPG') },
    { label: 'Pastries and cakes', img: imageUrl('DSC00076.JPG') },
    { label: 'Lunch', img: imageUrl('DSC00096.JPG') },
    { label: 'Breakfast', img: imageUrl('DSC09982.JPG') },
    { label: 'Pizza', img: imageUrl('283A0302.JPG') },
  ]

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
