import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "RINGS",
    description:
      "Exquisite and versatile, our collection of rings features captivating designs crafted from premium materials",
  },
  {
    _id: uuid(),
    categoryName: "BRACELETS",
    description:
      "Adorn your wrist with our captivating bracelet collection, featuring delicate chains, sparkling tennis bracelets.",
  },
  {
    _id: uuid(),
    categoryName: "MANGALSUTRA",
    description:
      "  Discover the timeless elegance of our Mangalsutra collection, showcasing intricately crafted designs.",
  },
];
