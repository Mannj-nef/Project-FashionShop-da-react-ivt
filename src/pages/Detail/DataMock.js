import image1 from "../../assets/image/slider_nav4.jpg";
import image2 from "../../assets/image/slider_nav2.jpg";
import image3 from "../../assets/image/slider_nav5.jpg";

import image8 from "../../assets/clothes-Image/product-t-shirt7.jpg";
import image9 from "../../assets/clothes-Image/product-t-shirt4.2.jpg";
import image10 from "../../assets/clothes-Image/product-t-shirt5.3.jpg";

export const productDetail = {
  id: 1,
  imgUrl: image1,
  price: 120,
  title: "Title name product",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Necessitatibus corrupti doloribus fuga consequatur cumque nihil.Ex at sunt corrupti magni maiores deserunt deleniti temporibus facere quas architecto, alias aliquam dolorum?",
  imgUrlRelated: [
    {
      id: 1,
      imgSrc: image2,
      active: true,
    },
    {
      id: 2,
      imgSrc: image1,
      active: false,
    },
    {
      id: 3,
      imgSrc: image3,
      active: false,
    },
  ],
};

export const productRelateds = [
  {
    id: 1,
    img: image8,
    price: "$ 70",
    name: "1-Beige V neck button cardigan",
  },
  {
    id: 2,
    img: image9,
    price: "$ 70",
    name: "2-Beige V neck button cardigan",
  },
  {
    id: 3,
    img: image8,
    price: "$ 70",
    name: "3-Beige V neck button cardigan",
  },
  {
    id: 4,
    img: image10,
    price: "$ 70",
    name: "4-Beige V neck button cardigan",
  },
  {
    id: 5,
    img: image9,
    price: "$ 70",
    name: "5-Beige V neck button cardigan",
  },
  {
    id: 6,
    img: image8,
    price: "$ 70",
    name: "6-Beige V neck button cardigan",
  },
  {
    id: 7,
    img: image10,
    price: "$ 70",
    name: "7-Beige V neck button cardigan",
  },
  {
    id: 8,
    img: image9,
    price: "$ 70",
    name: "8-Beige V neck button cardigan",
  },
];

export const buyerRatings = [
  {
    id: 1,
    rating: "",
    name: "Manh quan",
    date: "05/01/2022",
    title: "Absolutely love this case",
    description: "This was exactly what I wanted, very happy love it, 5 stars",
  },
  {
    id: 2,
    rating: "",
    name: "Mannj Nef",
    date: "05/02/2022",
    title: "Great leather quality",
    description:
      "The leather quality is great, I’ve tried others before and it all seems like fake ****",
  },
  {
    id: 3,
    rating: "",
    name: "Giovanni V",
    date: "04/03/2022",
    title: "Great leather quality",
    description:
      "Was looking for a good-quality case for my AirPods before I finally found these ones, very happy with the purchase",
  },
];
