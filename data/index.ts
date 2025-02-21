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

export interface CollectionType {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  tag: string;
}

export const collections = [
  {
    id: 1,
    name: "Summer Breeze Dress",
    price: 299,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/1%2F0A4A1822-1.jpg?alt=media&token=1ed8617e-845e-4996-8e69-1d18fb3980a8",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/1%2F0A4A1826-1.jpg?alt=media&token=69fcd6fc-ab9b-454f-8930-a4350b87e1d9",
    tag: "winter",
  },
  {
    id: 2,
    name: "Floral Maxi Dress",
    price: 349,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/2%2F0A4A1849-1.jpg?alt=media&token=f06fa10e-e0db-4e40-a35c-32ddd46fc457",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/2%2F0A4A1860-1.jpg?alt=media&token=34ff01b7-4cc7-4b34-80de-783aa7b622fe",
    tag: "summer",
  },
  {
    id: 3,
    name: "Linen Summer Suit",
    price: 599,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/3%2F0A4A1870-1.jpg?alt=media&token=37e1fa7d-97d2-4127-949c-210df2e2c714",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/3%2F0A4A1876-1.jpg?alt=media&token=da1541fe-e1ff-445c-b17c-3ec6ff17a36b",
    tag: "summer",
  },
  {
    id: 4,
    name: "Summer Evening Gown",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/4%2F0A4A1888-1.jpg?alt=media&token=8b92ae7e-e28f-4406-b924-b6fd7549e82d",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/4%2F0A4A1895-1.jpg?alt=media&token=b1fcd307-4ed8-4110-9b4f-c4c7d2c70fb9",
    tag: "summer",
  },
  {
    id: 5,
    name: "Light Summer Blazer",
    price: 449,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/5%2F0A4A1898-1.jpg?alt=media&token=8b77f6d5-679c-48b3-8a86-091fc450571b",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/5%2F0A4A1967-1.jpg?alt=media&token=137920bc-1b39-48fb-983e-d33632e43268",
    tag: "summer",
  },
  {
    id: 6,
    name: "Winter Wool Coat",
    price: 899,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/6%2F0A4A1915-1.jpg?alt=media&token=bfca52c9-be9e-4dc5-8a12-e4e8177611cc",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/5%2F0A4A1967-1.jpg?alt=media&token=137920bc-1b39-48fb-983e-d33632e43268",
    tag: "winter",
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 399,
    image: "/images/0A4A2067-1.jpg",
    hoverImage: "/images/0A4A2069-1.jpg",
    tag: "winter",
  },
  {
    id: 8,
    name: "Winter Evening Dress",
    price: 699,
    image: "/images/0A4A2109-1.jpg",
    hoverImage: "/images/0A4A2114-1.jpg",
    tag: "winter",
  },
  {
    id: 9,
    name: "Quilted Winter Jacket",
    price: 549,
    image: "/images/0A4A1981-1.jpg",
    hoverImage: "/images/0A4A1984-3.jpg",
    tag: "winter",
  },
  {
    id: 10,
    name: "Winter Formal Suit",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/10%2F0A4A1974-1.jpg?alt=media&token=ad4a3edc-1c36-4609-b7ac-1f739875a814",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/10%2F0A4A1979-1.jpg?alt=media&token=cf177e06-0261-4448-a5fc-117731932800",
    tag: "winter",
  },
];

export const accordionItems = [
  {
    title: "Description",
    content:
      "Discover new worlds of information with our interactive learning platform.",
  },
];