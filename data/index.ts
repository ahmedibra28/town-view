const data = [
  {
    category: 'HOT DRINKS',
    item: 'Espresso',
    price: 2,
    description: '',
    image: '283A0111.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Americano',
    price: 1.5,
    image: '283A0115.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Hot Chocolate',
    price: 2,
    image: '283A0119.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Spanish Latte',
    price: 2.5,
    image: '283A0121.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Coffee Latte',
    price: 2,
    image: '283A0133.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Caramel Latte',
    price: 2.5,
    image: '283A0133.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Vanilla Latte',
    price: 2.5,
    image: '283A0133.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Camel Tea',
    price: 2.5,
    image: '283A0135.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Milk Tea',
    price: 1.5,
    image: '283A0135.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Lipton tea',
    price: 1.5,
    image: '283A0137.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Town View Tea',
    price: 1.5,
    image: '283A0142.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Black Tea',
    price: 1.5,
    image: '283A0150.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Limon Tea',
    price: 1.5,
    image: '283A0153.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Dawa Tea',
    price: 2,
    image: '283A0159.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Dangawiz tea',
    price: 1.5,
    image: '283A0160.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Cappuccino',
    price: 2,
    image: '283A0234.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Town View Cappuccino',
    price: 2.5,
    image: '283A0200.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Cortado',
    price: 2,
    image: '283A0261.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Macchiato',
    price: 2.5,
    image: '283A0263.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Honey Latte',
    price: 2.5,
    image: '283A0265.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Masalla Tea',
    price: 1.5,
    image: '283A0266.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Honey Tea',
    price: 1.5,
    image: '283A0269.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Black Lipton Tea',
    price: 1.5,
    image: '283A0271.JPG',
  },
  {
    category: 'HOT DRINKS',
    item: 'Doppio coffee',
    price: 2,
    image: 'DSC00001.JPG',
  },
  {
    category: 'Limonade',
    item: 'Green Apple Limonade',
    price: 3,
    image: '283A0207.JPG',
  },
  {
    category: 'Limonade',
    item: 'Town Classic Lemonade',
    price: 3,
    image: '283A0208.JPG',
  },
  {
    category: 'Limonade',
    item: 'Strawberry Limonade',
    price: 3,
    image: '283A0211.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Town Classic Lemonade',
    price: 3,
    image: '283A0208.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Strawberry Limonade',
    price: 3,
    image: '283A0211.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Bluberry mojito',
    price: 3,
    image: '283A0214.JPG',
  },
  {
    category: 'MOJITO',
    item: 'Pistachio. Mojito.',
    price: 3,
    image: '283A0254.JPG',
  },
  {
    category: 'FRAPPES',
    item: 'Cafe frappe. ',
    price: 3.5,
    image: 'DSC00085.JPG',
  },
  {
    category: 'FRAPPES',
    item: 'Vanilla Frappe',
    price: 3.5,
    image: 'DSC00053.JPG',
  },
  {
    category: 'FRAPPES',
    item: 'Strawberry Frappe',
    price: 3.5,
    image: 'DSC00059.JPG',
  },
  {
    category: 'Ice Tea',
    item: 'Town view Ice tea',
    price: 3,
    image: 'DSC00039.JPG',
  },
  {
    category: 'Ice Tea',
    item: 'passion Ice tea',
    price: 3,
    image: 'DSC00043.JPG',
  },
  {
    category: 'Ice Tea',
    item: 'Cherry Ice tea',
    price: 3,
    image: 'DSC00047.JPG',
  },
  {
    category: 'Ice Tea',
    item: 'Popcorn ice tea.',
    price: 3,
    image: 'DSC00051.JPG',
  },
  {
    category: 'Ice Latte ',
    item: 'Ice latte',
    price: 3,
    image: 'DSC00020.JPG',
  },
  {
    category: 'Ice Latte ',
    item: 'Ice Vanilla latte.',
    price: 2.5,
    image: 'DSC00013.JPG',
  },
  {
    category: 'Ice Latte ',
    item: 'Ice Mocha latte. ',
    price: 2.5,
    image: 'DSC00017.JPG',
  },
  {
    category: 'Ice Latte ',
    item: 'Ice Spanish Latte',
    price: 2.5,
    image: 'DSC00024.JPG',
  },
  {
    category: 'Ice Latte ',
    item: 'Ice Town view Latte',
    price: 2.5,
    image: 'DSC00026.JPG',
  },
  {
    category: 'Smothies',
    item: 'Strawberry Banana Smooth ',
    price: 3,
    image: 'DSC00111.JPG',
  },
  {
    category: 'Smothies',
    item: 'Mango passion smooth.    ',
    price: 4,
    image: 'DSC00104.JPG',
  },
  {
    category: 'Smothies',
    item: 'Kiwi smooth.',
    price: 3,
    image: 'DSC00137.JPG',
  },
  {
    category: 'Smothies',
    item: 'Pear smooth.  ',
    price: 3,
    image: 'DSC00123.JPG',
  },
  {
    category: 'Smothies',
    item: 'Cocktail Smoothie',
    price: 3,
    image: 'DSC00032.JPG',
  },
  {
    category: 'Fresh Choice',
    item: 'Orange Choice',
    price: 1.5,
    image: '283A0157.JPG',
  },
  {
    category: 'Fresh Choice',
    item: 'Babaay',
    price: 2,
    image: '283A0164.JPG',
  },
  {
    category: 'Fresh Choice',
    item: 'Mango ',
    price: 2,
    image: '283A0167.JPG',
  },
  {
    category: 'Fresh Choice',
    item: 'Avocado',
    price: 3,
    image: '283A0173.JPG',
  },
  {
    category: 'Fresh Choice',
    item: 'Isbaandhees',
    price: 1.5,
    image: 'DSC00009.JPG',
  },
  {
    price: 2.5,
    category: 'Fresh choice',
    item: 'feeto qare',
    image: '283A0219.JPG',
  },
  {
    item: 'Mixed Fruits',
    price: 3,
    category: 'Fresh choice',
    image: '283A0148.jPG',
  },
  {
    category: 'Fresh choice',
    item: 'qare',
    price: 1.5,
    image: '283A0175.JPG',
  },
  {
    category: 'Shakes',
    item: 'Oreo Shake',
    price: 3,
    image: '283A0195.JPG',
  },
  {
    category: 'Shakes',
    item: 'Vanilla Shake',
    price: 3,
    image: '283A0178.JPG',
  },
  {
    category: 'Shakes',
    item: 'Chocolate Shake',
    price: 3,
    image: '283A0182.JPG',
  },
  {
    category: 'Shakes',
    item: 'Strawberry Shake',
    price: 3,
    image: '283A0184.JPG',
  },
  {
    category: 'Shakes',
    item: 'Coffee  Shake',
    price: 3,
    image: '283A0189.JPG',
  },
  {
    category: 'Dinner',
    item: 'Chicken Burger',
    price: 5,
    image: '283A9862.JPG',
  },
  {
    category: 'Dinner',
    item: 'Fish Burger',
    price: 5,
    image: '283A9862.JPG',
  },
  {
    category: 'Dinner',
    item: 'Meat Burger',
    price: 5,
    image: '283A9862.JPG',
  },
  {
    category: 'Dinner',
    item: 'Fish Shawarma ',
    price: 5,
    image: '283A9854.JPG',
  },
  {
    category: 'Dinner',
    item: 'Chicken Shawarma ',
    price: 5,
    image: '283A9854.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'White forest Cake',
    price: 3,
    image: 'DSC00063.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Redvill view',
    price: 3,
    image: 'DSC00067.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Oreo Cake',
    price: 3,
    image: 'DSC00071.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Lotus Cake',
    price: 3,
    image: 'DSC00076.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Chocolate Cake',
    price: 3,
    image: 'DSC00080.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Bur macaan',
    price: 2,
    image: 'DSC09231.JPG',
    description: '10 pieces',
  },
  {
    category: 'Pastries and cakes',
    item: 'Orange Cake',
    price: 3,
    image: 'DSC00093.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Cinnamon roll',
    price: 0.5,
    image: 'DSC09238.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Trimisu',
    price: 3,
    image: 'DSC09407.JPG',
  },
  {
    category: 'Pastries and cakes',
    item: 'Strawberry ',
    price: 3,
    image: 'DSC09410.JPG',
  },
  {
    category: 'Lunch',
    item: 'Rice Saldata',
    price: 2,
    image: 'DSC00096.JPG',
  },
  {
    category: 'Lunch',
    item: 'Fish sukhaar',
    description: 'Chunks of fish sautéed with veggies',
    price: 5,
    image: 'DSC09279.JPG',
  },
  {
    category: 'Lunch',
    item: 'Chicken sukhaar',
    description: 'Chicken breast sautéed with veggie and spices',
    price: 5,
    image: 'DSC09227.JPG',
  },
  {
    category: 'Lunch',
    item: 'Chicken Broast',
    price: 4,
    description: 'Chicken drums breaded and deep fried',
    image: 'DSC09267.JPG',
  },
  {
    category: 'Lunch',
    item: 'Scallop Chicken',
    price: 7,
    description: 'leg quater of chicken, marinade and saute with vigetable',
    image: 'DSC00131.JPG',
  },
  {
    category: 'Lunch',
    item: 'Crispy Chicken Finger',
    price: 6,
    description: 'Chicken breast breaded and deep fried',
    image: 'DSC09223.JPG',
  },
  {
    category: 'Lunch',
    item: 'Crispy Fish Finger',
    price: 6,
    image: 'DSC09223.JPG',
    description: 'Fillet of fish deep fried',
  },
  {
    category: 'Lunch',
    item: 'Beef Steak',
    description: 'Beef steak grilled to perfection',
    price: 7,
    image: 'DSC09241.JPG',
  },
  {
    category: 'Lunch',
    item: 'Pasta Alforno',
    description: 'Baked macaroni with sauce and cheese',
    price: 5,
    image: 'DSC09324.JPG',
  },
  {
    category: 'Lunch',
    description: 'Chunks of fish sautéed with special sauce',
    item: 'Shanghai Fish',
    price: 7,
    image: 'DSC09282.JPG',
  },
  {
    category: 'Lunch',
    item: 'Dheylo Ari',
    price: 10,
    image: 'DSC00109.JPG',
    description: 'young goat, saute with onion, garlic and different species',
  },
  {
    category: 'Lunch',
    item: 'Chicken Kutuleti',
    price: 7,
    image: 'DSC00118.JPG',
    description: 'Chicken Breast, battered and deep fried',
  },
  {
    category: 'Lunch',
    item: 'Town View Chicken',
    price: 8,
    image: 'DSC09316.JPG',
    description: 'Fillet of chicken served with spinsh and special cream sauce',
  },
  {
    category: 'Lunch',
    item: 'Scallop Fish',
    price: 7,
    image: 'DSC09346.JPG',
    description: 'Piecies of fish with special sauce',
  },
  {
    category: 'Lunch',
    item: 'Grilled Fish',
    price: 6,
    image: 'DSC09373.JPG',
    description: 'Grilled fish with spacies',
  },
  {
    category: 'Lunch',
    item: 'Camel Steak',
    price: 7,
    image: 'DSC09379.JPG',
    description: 'saute with veditable and spacies',
  },
  {
    category: 'Lunch',
    item: 'Fish Masala',
    price: 6,
    description: 'Fillet of fish made with masala sauce',
    image: 'DSC09302.JPG',
  },
  {
    category: 'Lunch',
    item: 'Town View Fish',
    price: 8,
    image: 'DSC09380.JPG',
    description: 'king fish saute with blend of spacies',
  },
  {
    category: 'Lunch',
    item: 'Talteli pasta',
    price: 2,
    image: 'DSC09397.JPG',
  },
  {
    category: 'Lunch',
    item: 'Pasta Saldata',
    price: 2,
    image: 'DSC09404.JPG',
  },
  {
    category: 'Lunch',
    item: 'Green salad',
    price: 4,
    image: 'DSC06991.JPG',
    description:
      'Lettuce tomatoes red onion sharreded correct cucumber and house dressing',
  },
  {
    category: 'Lunch',
    item: 'Town Plate',
    price: 6,
    image: 'DSC07022.JPG',
    description:
      'Chapatti soaked with soup. Then topped with chicken/meat and ranch. Dressing',
  },
  {
    category: 'Lunch',
    item: 'Garlic cheese bread',
    price: 4,
    image: 'DSC07008.JPG',
    description: 'Garlic cheese bread served salad or chips',
  },
  {
    category: 'Lunch',
    item: 'Garlic cheese bread',
    price: 7,
    image: 'DSC07025.JPG',
    description: 'Garlic cheese bread with chicken or fish:',
  },
  {
    category: 'Lunch',
    item: 'Fried chicken with chips',
    price: 7,
    image: 'DSC07038.JPG',
    size: 'Half-5 Full-10',
  },
  {
    category: 'Lunch',
    item: 'Chicken/Meat kabab',
    price: 8,
    image: 'DSC07068.JPG',
  },
  {
    category: 'Lunch',
    item: 'Dhaylo isku karis ',
    price: 7,
    image: 'DSC07050.JPG',
    size: '1nafar-15 2nafar-20',
  },
  {
    category: 'Fast Food',
    item: 'Crispy fish sandwiches',
    price: 5,
    image: 'DSC07038.JPG',
  },
  {
    category: 'Fast Food',
    item: 'Crispy meatballs',
    price: 5,
    image: 'DSC07074.JPG',
    description: 'Crispy meat balls served with salad or chips',
  },
  {
    category: 'Breakfast',
    item: 'Malawax Wrap',
    price: 4,
    image: 'DSC09965.JPG',
    description: 'Malawax wrap with scrabmled eggs',
  },
  {
    category: 'Breakfast',
    item: 'Fuul',
    price: 4,
    image: 'DSC09974.JPG',
    description:
      'fava peans cooked with tamato and spacies, you can get either chappati, anjeram bread or malawax',
  },
  {
    category: 'Breakfast',
    item: 'Spinach Omelette',
    price: 4,
    image: 'DSC09979.JPG',
    description: 'Omelette wrap with spinach',
  },
  {
    category: 'Breakfast',
    item: 'Liver',
    price: 5,
    image: 'DSC09982.JPG',
    description: 'Goat liver, saute with onion and blendy of species',
  },
  {
    category: 'Breakfast',
    item: 'Suqaar',
    price: 5,
    image: 'DSC09984.JPG',
    description:
      ' Pieces of camel meat, saute with spices and vegitgables to perfection',
  },
  {
    category: 'Breakfast',
    item: 'Shakshuka',
    price: 4,
    image: 'DSC09991.JPG',
    description: 'Egg cooked with tomato Peree',
  },
  {
    category: 'Pizza',
    item: 'Migrate',
    price: 6,
    size: 'Small',
    image: '283A0302.JPG',
    description: 'Chees pizza',
  },
  {
    category: 'Pizza',
    item: 'Migrate',
    price: 8,
    size: 'Medium',
    image: '283A0302.JPG',
    description: 'Chees pizza',
  },
  {
    category: 'Pizza',
    item: 'Migrate',
    price: 10,
    size: 'Large',
    image: '283A0302.JPG',
    description: 'Chees pizza',
  },
  {
    category: 'Pizza',
    item: 'Pizza',
    price: 7,
    size: 'Small',
    image: '283A0300.JPG',
    description: 'chees pizza  Pizza with Topings',
  },
  {
    category: 'Pizza',
    item: 'Pizza',
    price: 10,
    size: 'Medium',
    image: '283A0300.JPG',
    description: 'chees pizza  Pizza with Topings',
  },
  {
    category: 'Pizza',
    item: 'Pizza',
    price: 13,
    size: 'Large',
    image: '283A0300.JPG',
    description: 'chees pizza  Pizza with Topings',
  },
]

export const getItems = () => {
  return data.map((item) => ({
    ...item,
    size: item?.size || null,
    image: item?.image
      ? `https://farshaxan.blr1.cdn.digitaloceanspaces.com/town-view/${item.image}`
      : null,
  }))
}

export const getCategories = () => {
  return getItems().map((item) => item.category)
}

export const getItemsByCategory = (category: string) => {
  return getItems().filter(
    (item) => item.category.toLowerCase() === category.toLowerCase(),
  )
}

export const groupItemsByCategory = () => {
  return Object.values(
    getItems().reduce((acc: any, item) => {
      const { category } = item
      acc[category] = acc[category] || []
      acc[category].push(item)
      return acc
    }, {}),
  )
}

export const groupItemsByCategorySlug = (slug: string) => {
  const slugToTitle = slug?.replaceAll('-', ' ')?.toLowerCase()

  const items = getItemsByCategory(slugToTitle)

  return Object.values(
    items.reduce((acc: any, item) => {
      const { category } = item
      acc[category] = acc[category] || []
      acc[category].push(item)
      return acc
    }, {}),
  )
}
