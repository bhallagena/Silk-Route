export const carddata = [
  {
    name: "Card 1",
    description: "This is the first card",
    image: ["/images/0A4A2401.JPG", "/images/0A4A2402.JPG", "/images/0A4A2403.JPG"],
  },
  {
    name: "Card 2",
    description: "This is the second card",
    image: ["images/0A4A2417.JPG", "/images/0A4A2418.JPG", "/images/0A4A2420.JPG"],
  },
  {
    name: "Card 3",
    description: "This is the third card",
    image: ["images/0A4A2427.JPG", "/images/0A4A2428.JPG", "/images/0A4A2429.JPG"],
  },
]

export const collections = [
  {
    id: 1,
    name: "Summer Breeze Dress",
    price: 299,
    image: "/images/0A4A2401.JPG",
    hoverImage: "/images/0A4A2402.JPG",
    tag: "summer",
  },
  {
    id: 2,
    name: "Floral Maxi Dress",
    price: 349,
    image: "photo-1539109136881-3be0616acf4b",
    hoverImage: "photo-1475180098004-ca77a66827be",
    tag: "summer",
  },
  {
    id: 3,
    name: "Linen Summer Suit",
    price: 599,
    image: "photo-1496747611176-843222e1e57c",
    hoverImage: "photo-1483985988355-763728e1935b",
    tag: "summer",
  },
  {
    id: 4,
    name: "Summer Evening Gown",
    price: 799,
    image: "photo-1490481651871-ab68de25d43d",
    hoverImage: "photo-1515372039744-b8f02a3ae446",
    tag: "summer",
  },
  {
    id: 5,
    name: "Light Summer Blazer",
    price: 449,
    image: "photo-1485968579580-b6d095142e6e",
    hoverImage: "photo-1496217590455-aa63a8350eea",
    tag: "summer",
  },
  {
    id: 6,
    name: "Winter Wool Coat",
    price: 899,
    image: "photo-1485968579580-b6d095142e6e",
    hoverImage: "photo-1487222477894-8943e31ef7b2",
    tag: "winter",
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 399,
    image: "photo-1434389677669-e08b4cac3105",
    hoverImage: "photo-1434389677669-e08b4cac3105",
    tag: "winter",
  },
  {
    id: 8,
    name: "Winter Evening Dress",
    price: 699,
    image: "photo-1549062572-544a64fb0c56",
    hoverImage: "photo-1549062572-544a64fb0c56",
    tag: "winter",
  },
  {
    id: 9,
    name: "Quilted Winter Jacket",
    price: 549,
    image: "photo-1548624313-0396c75f3c2c",
    hoverImage: "photo-1548624313-0396c75f3c2c",
    tag: "winter",
  },
  {
    id: 10,
    name: "Winter Formal Suit",
    price: 799,
    image: "photo-1553808373-2d1b2c9a2d6e",
    hoverImage: "photo-1553808373-2d1b2c9a2d6e",
    tag: "winter",
  },
];

export interface CollectionType {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  tag: string;
}

export const accordionItems = [
  {
    title: "Description",
    content:
      "Discover new worlds of information with our interactive learning platform.",
  },
];