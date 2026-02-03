
import { Category, MenuItem, Testimonial } from './types';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  targetCategory?: Category | 'All';
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    category: Category.SWEETS,
    name: 'Gulab Jamun (4 pcs)',
    price: 50,
    description: 'Soft milk dumplings soaked in rose-flavored sugar syrup.',
    image: 'https://media.istockphoto.com/id/1363048391/photo/gulab-jamun.jpg?s=612x612&w=0&k=20&c=LzqzpCQQAlQxTbaTPiPAnmdPcsv5uPTFv9UEh7WW2rk=',
    isVegetarian: true,
    rating: 4.8,
    ingredients: ['Milk Solids (Khoya)', 'Sugar', 'Rose Water', 'Cardamom', 'Ghee', 'Maida'],
  },
  {
    id: '2',
    category: Category.SWEETS,
    name: 'Bandar Halwa (250g)',
    price: 250,
    description: 'Rich and decadent almond fudge made with pure ghee.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1735800195433-halwa%20zomato%20new.jpg',
    isVegetarian: true,
    rating: 4.9,
    ingredients: ['Almonds', 'Pure Ghee', 'Sugar', 'Saffron', 'Cardamom'],
  },
  {
    id: '3',
    category: Category.SWEETS,
    name: 'Rasgulla (4 pcs)',
    price: 60,
    description: 'Spongy cottage cheese balls cooked in light sugar syrup.',
    image: 'https://www.shutterstock.com/image-photo/sponge-rasgulla-sweets-famous-bangladesh-600nw-2368430053.jpg',
    isVegetarian: true,
    rating: 4.7,
    ingredients: ['Fresh Chhena (Cottage Cheese)', 'Sugar Syrup', 'Rose Water'],
  },
  {
    id: '4',
    category: Category.SWEETS,
    name: 'Jalebi (100g)',
    price: 80,
    description: 'Crispy, pretzel-shaped fried treat soaked in syrup.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20240404/pngtree-jalebi-an-indian-sweet-made-on-occasions-and-festivals-like-holi-image_15707477.jpg',
    isVegetarian: true,
    rating: 4.5,
    ingredients: ['Maida', 'Sugar', 'Saffron', 'Ghee', 'Curd'],
  },
  {
    id: '5',
    category: Category.SWEETS,
    name: 'Mysore Pak (250g)',
    price: 300,
    description: 'Traditional besan and ghee diamond slices that melt in your mouth.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730440548987-Ghee%20mysorepak.JPG',
    isVegetarian: true,
    rating: 4.8,
    ingredients: ['Gram Flour (Besan)', 'Pure Ghee', 'Sugar'],
  },
  {
    id: '13',
    category: Category.SWEETS,
    name: 'Kaju Katli (250g)',
    price: 350,
    description: 'Diamond-shaped cashew fudge topped with edible silver foil.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730479785687-Kaju%20Burfi.JPG',
    isVegetarian: true,
    rating: 4.9,
    ingredients: ['Cashews', 'Sugar', 'Ghee', 'Silver Foil'],
  },
  {
    id: '14',
    category: Category.SWEETS,
    name: 'Kalakand (500g)',
    price: 250,
    description: 'Traditional milk cake made with solidified sweetened milk and paneer.',
    image: 'https://kitchenmai.com/wp-content/uploads/2020/04/kalakand_new.jpg',
    isVegetarian: true,
    rating: 4.7,
    ingredients: ['Milk', 'Sugar', 'Ghee', 'Cardamom', 'Nuts'],
  },
  {
    id: '15',
    category: Category.SWEETS,
    name: 'Pootharekulu (2 pcs)',
    price: 120,
    description: 'The famous "Paper Sweet" of Andhra. Wafer-thin rice sheets stuffed with jaggery and ghee.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1737523644868-sugar%20putarekulu.JPG',
    isVegetarian: true,
    rating: 5.0,
    ingredients: ['Rice Batter Layers', 'Jaggery/Sugar', 'Pure Ghee', 'Dry Fruits'],
  },
  {
    id: '16',
    category: Category.SWEETS,
    name: 'Sunnundalu (4 pcs)',
    price: 140,
    description: 'Traditional roasted urad dal and jaggery balls loaded with ghee.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/data/36/DSC_5345.jpg',
    isVegetarian: true,
    rating: 4.8,
    ingredients: ['Urad Dal', 'Jaggery', 'Pure Ghee', 'Cardamom'],
  },
  {
    id: '17',
    category: Category.SWEETS,
    name: 'Ariselu (250g)',
    price: 180,
    description: 'Traditional fried rice flour and jaggery cakes with sesame seeds.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730440893582-Ariselu.JPG',
    isVegetarian: true,
    rating: 4.6,
    ingredients: ['Rice Flour', 'Jaggery', 'Sesame Seeds', 'Ghee/Oil'],
  },
  {
    id: '18',
    category: Category.SWEETS,
    name: 'Rasmalai (2 pcs)',
    price: 250,
    description: 'Soft cottage cheese dumplings soaked in sweetened, thickened saffron milk.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/067/221/014/small/rasmalai-sweets-on-a-plate-on-a-transparent-background-free-png.png',
    isVegetarian: true,
    rating: 4.7,
    ingredients: ['Milk Solids', 'Sugar', 'Cardamom', 'Pistachios', 'Saffron'],
  },
  {
    id: '19',
    category: Category.SWEETS,
    name: 'Soan Papdi (250g)',
    price: 200,
    description: 'Classic flaky and crisp sweet made with gram flour, ghee, and cardamom.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/data/43/DSC_5432.jpg',
    isVegetarian: true,
    rating: 4.7,
    ingredients: ['Gram Flour', 'Sugar', 'Ghee', 'Cardamom', 'Almonds'],
  },
  {
    id: '20',
    category: Category.SWEETS,
    name: 'Dry Fruit Laddu (4 pcs)',
    price: 200,
    description: 'Healthy and premium energy balls packed with dates, figs, cashews, and almonds. No added sugar.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730440347845-Dryfruit%20ladoo.JPG',
    isVegetarian: true,
    rating: 4.9,
    ingredients: ['Dates', 'Figs', 'Cashews', 'Almonds', 'Pistachios', 'Ghee'],
  },
  {
    id: '21',
    category: Category.SWEETS,
    name: 'Bombay Halwa (250g)',
    price: 180,
    description: 'Glossy and chewy confection made with corn flour and ghee, studded with nuts.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1735800195433-halwa%20zomato%20new.jpg',
    isVegetarian: true,
    rating: 4.6,
    ingredients: ['Corn Flour', 'Sugar', 'Ghee', 'Cardamom', 'Nuts'],
  },
  {
    id: '22',
    category: Category.SWEETS,
    name: 'Special Besan Laddu (4 pcs)',
    price: 120,
    description: 'Aromatic roasted gram flour balls made with pure ghee and topped with cashews.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730438764056-Basin%20Laddu.JPG',
    isVegetarian: true,
    rating: 4.8,
    ingredients: ['Coarse Gram Flour', 'Sugar', 'Pure Ghee', 'Cashews', 'Cardamom'],
  },
  {
    id: '23',
    category: Category.SWEETS,
    name: 'Oil Mysore Pak (250g)',
    price: 240,
    description: 'Seasonal delight made with fresh mango pulp and rich milk solids.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730440412572-Oil%20Mysorpak.JPG',
    isVegetarian: true,
    rating: 4.8,
    ingredients: ['Mango Pulp', 'Milk Solids', 'Sugar', 'Cardamom'],
  },
  {
    id: '6',
    category: Category.BAKERY,
    name: 'Pineapple Pastry',
    price: 60,
    description: 'Creamy sponge cake slice layered with fresh pineapple filling.',
    image: 'https://punjabbakers.com/wp-content/uploads/2024/05/PUNJABS-CAKE-n-BAKE-PINEAPPLE-PASTRY-EGGLESS-1-768x768.jpg',
    isVegetarian: true,
    rating: 4.6,
    ingredients: ['Flour', 'Sugar', 'Fresh Pineapple', 'Cream', 'Eggs'],
  },
  {
    id: '7',
    category: Category.BAKERY,
    name: 'Black Forest Cake (500g)',
    price: 450,
    description: 'Classic chocolate sponge layered with whipped cream and cherries.',
    image: 'https://onlinekrishnasweets.com/wp-content/uploads/2021/08/blackforest-cake--768x768.jpg.',
    isVegetarian: false,
    rating: 4.9,
    ingredients: ['Cocoa Powder', 'Flour', 'Sugar', 'Cherries', 'Cream', 'Eggs', 'Chocolate Shavings'],
  },
  {
    id: '8',
    category: Category.BAKERY,
    name: 'Veg Puff',
    price: 25,
    description: 'Flaky golden pastry filled with spiced mixed vegetables.',
    image: 'https://www.cookwithmanali.com/wp-content/uploads/2021/05/Veg-Puff-500x500.jpg',
    isVegetarian: true,
    rating: 4.4,
    ingredients: ['Maida', 'Butter/Margarine', 'Potatoes', 'Carrots', 'Peas', 'Spices'],
  },
  {
    id: '9',
    category: Category.BAKERY,
    name: 'Strawberry Pastry (1 pc)',
    price: 60,
    description: 'Fresh strawberry glaze on soft sponge.',
    image: 'https://img.clevup.in/360704/strawberrypastry-1733050995662.webp?format=webp',
    isVegetarian: true,
    rating: 4.5,
    ingredients: ['Flour', 'Sugar', 'Strawberry Glaze', 'Cream'],
  },
  {
    id: '10',
    category: Category.SAVORIES,
    name: 'Samosa (2 pcs)',
    price: 30,
    description: 'Crispy fried triangles filled with spiced potatoes and peas.',
    image: 'https://c.ndtvimg.com/2022-09/lpcnb0g8_samosa_625x300_29_September_22.jpg',
    isVegetarian: true,
    rating: 4.5,
    ingredients: ['Maida', 'Potatoes', 'Peas', 'Spices', 'Oil'],
  },
  {
    id: '24',
    category: Category.SAVORIES,
    name: 'Black Currant (500g)',
    price: 300,
    description: 'Spicy chili fritters stuffed with tangy peanut filling. A Vijayawada special.',
    image: 'https://assets.winni.in/product/primary/2014/6/33659.jpeg?dpr=1&w=500',
    isVegetarian: true,
    rating: 4.7,
    ingredients: ['Green Chilies', 'Gram Flour Batter', 'Peanuts', 'Tamarind', 'Spices'],
  },
  {
    id: '11',
    category: Category.BAKERY,
    name: 'Butterscotch Cake (500g)',
    price: 350,
    description: 'Crunchy butterscotch praline cake with caramel drizzle.',
    image: 'https://www.cakesworld.in/images/web/butterscotch_22104.jpg',
    isVegetarian: true,
    rating: 4.8,
    ingredients: ['Flour', 'Butterscotch Chips', 'Caramel', 'Cream', 'Sugar'],
  },
  {
    id: '12',
    category: Category.BAKERY,
    name: 'Strawberry Cake (500g)',
    price: 350,
    description: 'Delightful pink cake with fresh strawberry crush.',
    image: 'https://trufflescakes.in/wp-content/uploads/2020/03/STRAWBERRY-CAKE-RG-504-8-8.jpg',
    isVegetarian: true,
    rating: 4.9,
    ingredients: ['Flour', 'Strawberry Crush', 'Cream', 'Sugar'],
  },
  {
    id: '25',
    category: Category.PICKLES,
    name: 'Avakaya Pickle (500g)',
    price: 350,
    description: 'Traditional Andhra mango pickle made with mustard powder and premium spices.',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/avakaya-pachadi.jpg',
    isVegetarian: true,
    rating: 4.9,
    ingredients: ['Raw Mango', 'Mustard Powder', 'Red Chili Powder', 'Gingelly Oil', 'Garlic'],
  },
  {
    id: '26',
    category: Category.PICKLES,
    name: 'Gongura Pickle (500g)',
    price: 250,
    description: 'Tangy sorrel leaves pickle, a signature delicacy of Andhra Pradesh.',
    image: 'https://sumadhurafoods.com/cdn/shop/files/I5A1821.jpg?v=1716974990&width=1080',
    isVegetarian: true,
    rating: 4.8,
    ingredients: ['Gongura Leaves', 'Red Chilies', 'Tamarind', 'Garlic', 'Spices'],
  },
  {
    id: '27',
    category: Category.PICKLES,
    name: 'Tomato Pickle (500g)',
    price: 250,
    description: 'Spicy and tangy sun-dried tomato pickle.',
    image: 'https://www.archanaskitchen.com/_next/image?url=https%3A%2F%2Fimages.archanaskitchen.com%2Fimages%2Frecipes%2Findian%2Fside-dishes%2Findian-pickle-recipes%2FSpicy_Tomato_Pickle_Recipe_South_Indian_Thakkali_Thokku_4e90ec4566.jpg&w=1920&q=90',
    isVegetarian: true,
    rating: 4.7,
    ingredients: ['Tomatoes', 'Red Chilies', 'Tamarind', 'Mustard Seeds', 'Oil'],
  },
  {
    id: '28',
    category: Category.PICKLES,
    name: 'Chicken boneless pickle (500g)',
    price: 750,
    description: 'Boneless chicken chunks marinated in aromatic spices and preserved in oil. A spicy non-veg delight.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730482592124-Chicken%20Pickle.JPG',
    isVegetarian: false,
    rating: 4.8,
    ingredients: ['Boneless Chicken', 'Ginger Garlic Paste', 'Red Chili Powder', 'Lemon Juice', 'Spices'],
  },
  {
    id: '29',
    category: Category.PICKLES,
    name: 'Mutton boneless pickle (500g)',
    price: 800,
    description: 'Tender mutton pieces pickled with traditional Andhra spices.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730482615376-Mutton%20Pickle.JPG',
    isVegetarian: false,
    rating: 4.9,
    ingredients: ['Mutton', 'Garam Masala', 'Red Chili Powder', 'Mustard Oil', 'Garlic'],
  },
  {
    id: '30',
    category: Category.PICKLES,
    name: 'Prawns Pickle (500g)',
    price: 600,
    description: 'Juicy prawns pickled in a tangy and spicy masala base.',
    image: 'https://swagruha-foods-prod.s3.eu-north-1.amazonaws.com/image/1730482642151-Prawns%20Pickle.JPG',
    isVegetarian: false,
    rating: 4.7,
    ingredients: ['Prawns', 'Tamarind', 'Chili Powder', 'Fenugreek Powder', 'Groundnut Oil'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Why Vijayawada Loves Our Mysore Pak',
    excerpt: 'Discover the secret behind our signature melt-in-your-mouth Mysore Pak that has defined our Krishnalanka legacy.',
    content: `Vijayawada loves this Mysore Pak because it is a perfect, melt-in-the-mouth blend of ghee, sugar, and gram flour, offering a rich, traditional taste that has become a staple for celebrations. Originating from the Mysore Palace, its nostalgic, royal, and comforting texture makes it a beloved, indulgent treat across generations.

### Why Vijayawada Loves Our Mysore Pak

*   **Melt-in-the-Mouth Texture:** Unlike harder sweets, this version is famously soft and porous, dissolving instantly upon tasting.
*   **Rich Ghee Aroma:** The generous use of quality ghee provides a distinct, aromatic, and luxurious flavor that lingers.
*   **A Royal Heritage:** With roots in the Mysore Palace, this sweet offers a sense of history and premium, authentic taste.
*   **Perfect for Festivals:** Its enduring popularity in South India makes it an ideal, classic gift for festivals and special occasions.
*   **Simple yet Addictive:** The combination of gram flour (besan), sugar, and ghee provides a balanced, indulgent experience that is hard to resist.

This timeless, golden-colored sweet continues to win hearts in Vijayawada by consistently delivering a high-quality, authentic taste experience. For over 15 years, Sri Rama Sweets has been the go-to destination for authentic Mysore Pak in the Krishnalanka and Naidupet areas. Our commitment to purity ensures that every box you take home is a piece of Andhra's rich culinary history.`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8b94PBKnnEZ8XOKUUGszKJhgYyiM8UENz8A&s',
    date: 'Oct 12, 2023',
    tags: ['Vijayawada Sweets', 'Mysore Pak', 'Krishnalanka', 'sriramasweets'],
    ctaTitle: 'Taste the Legend!',
    ctaDescription: 'Our signature melt-in-the-mouth Mysore Pak is prepared fresh daily using premium desi ghee.',
    ctaButtonText: 'Order Mysore Pak Now',
    targetCategory: Category.SWEETS
  },
  {
    id: 'blog-2',
    title: 'Traditional Andhra Sweets: A Healthier Choice?',
    excerpt: 'Discover why traditional items like Putharekulu and Sunnundalu are better for you than modern processed desserts.',
    content: `Traditional Andhra sweets are increasingly viewed as a healthier alternative to modern, refined-sugar-loaded desserts. Deeply rooted in agricultural traditions, these delicacies—such as Putharekulu, Sunnundalu, and Ariselu—often swap refined white sugar for mineral-rich jaggery and utilize protein-packed lentils, dry fruits, and pure ghee.

While they are generally more nutritious than commercial sweets, they remain energy-dense, making moderation key to enjoying them as part of a healthy diet. Here is an in-depth look at why traditional Andhra sweets can be considered a healthier choice.

### The Power of Natural Ingredients

Unlike modern confections that often use refined flour (maida), artificial flavors, and preservatives, Andhra sweets are usually crafted with natural, wholesome ingredients:

*   **Jaggery (Bellam):** A staple in Telugu households, it is used instead of white sugar. Jaggery is unrefined, retaining minerals like iron, calcium, and potassium, which can boost immunity and provide a slower energy release compared to refined sugar.
*   **Protein-Packed Pulses:** Sweets like Sunnundalu are made from roasted black gram (urad dal), which is high in plant-based protein and fiber, making them ideal for muscle growth and satiety.
*   **Millets and Grains:** Traditional recipes also incorporate finger millet (ragi) and sorghum (jonnalu) in sweets like Ragi Laddu, offering high fiber and calcium, particularly for growing children.
*   **Pure Ghee:** Used in moderation, pure desi ghee is a healthy fat that helps in the absorption of nutrients.

### Conclusion

Traditional Andhra sweets represent a conscious blend of taste, nutrition, and tradition. By substituting refined sugar with jaggery and leveraging pulses and grains, they offer a, healthier, and often, more nutritious option for festive occasions. When consumed in moderation, they are a "guilt-free" way to enjoy the rich culinary heritage of Andhra Pradesh.`,
    image: 'https://images.boldsky.com/te/img/2023/01/cover-1673515124.jpg',
    date: 'Nov 05, 2023',
    tags: ['Health', 'Jaggery Sweets', 'Tradition', 'sriramasweets'],
    ctaTitle: 'Guilt-Free Indulgence!',
    ctaDescription: 'Experience the natural goodness of jaggery and roasted lentils with our signature Putharekulu and Sunnundalu.',
    ctaButtonText: 'Order Healthy Sweets',
    targetCategory: Category.SWEETS
  },
  {
    id: 'blog-3',
    title: 'The Art of Andhra Pickles: Avakaya and Beyond',
    excerpt: 'Discover the intense flavors and traditional sun-dried maturation techniques behind the iconic pickles of Andhra Pradesh.',
    content: `Andhra pickles, or pachadi, are a cornerstone of South Indian cuisine, renowned for their intense, fiery, and sun-dried maturation techniques, often transforming seasonal produce like mangoes, garlic, and leafy greens into year-long delicacies. The art revolves around precision, requiring precise ratios of mustard powder, pungent red chili powder (often Guntur variety), gingelly oil, and salt, traditionally prepared in, and stored in, ceramic jars called jaadis.

### The Essence of Andhra Pickles

*   **The Seasonal Ritual:** The preparation of pickles, particularly the iconic Avakaya (raw mango pickle), is a summer ritual. Families gather to cut, mix, and jar fresh ingredients, a process that bonds generations.
*   **Key Varieties:**
    *   **Avakaya:** The king of Andhra pickles, made with raw mango, mustard powder, chili, oil, and fenugreek.
    *   **Gongura:** A tangy, earthy pickle made from sorrel leaves.
    *   **Allam Pachadi:** Ginger-based pickle known for its pungent flavor.
    *   **Mixed Vegetable:** A blend of carrots, cauliflower, and chilies.
*   **The Art of Preservation:** The secret lies in using absolutely dry ingredients and containers to prevent moisture, which causes spoilage. The pickles are left to mature, allowing the sharp, raw spices to mellow and blend with the sour mango over several weeks.
*   **Health and Flavor:** While high in sodium, these fermented, preservative-free pickles aid digestion, provide a burst of antioxidants through turmeric and spices, and offer a powerful flavor boost to plain rice and ghee.

### Common Pitfalls and Tips

*   **Storage:** Always use clean, dry jars and spoons. A small amount of moisture can ruin the entire batch.
*   **Oil Levels:** The pickle should be submerged in oil to create a barrier against air, acting as a natural preservative.
*   **Quality Ingredients:** The intense flavor comes from using high-quality, freshly ground spices and specific, hot red chili powders like the Guntur variety.

These pickles are more than just condiments; they are a cherished, fiery heirloom that brings the heat and taste of Andhra Pradesh to meals globally.`,
    image: 'https://martmines.com/wp-content/uploads/2021/10/5.jpg',
    date: 'Dec 01, 2023',
    tags: ['Pickles', 'Andhra Cuisine', 'Spices', 'sriramasweets'],
    ctaTitle: 'Bring Home the Heat!',
    ctaDescription: 'Our traditional sun-dried pickles are prepared in small batches using the finest Guntur chilies and cold-pressed oils.',
    ctaButtonText: 'Explore Authentic Pickles',
    targetCategory: Category.PICKLES
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ravi Kumar',
    text: 'The Mysore Pak here is legendary. Tastes just like home! Best sweets in Vijayawada.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    text: 'Ordered catering for my daughter’s birthday. The Veg Puff and Black Forest cake were hits!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mohammed Ali',
    text: 'Their Mirchi Bajji is the perfect evening snack. Spicy and authentic.',
    rating: 4,
  },
];

export const CONTACT_INFO = {
  phone: '098858 98377',
  address: 'Dr Babu Rao St, Naidupet, Krishnalanka, Vijayawada, Andhra Pradesh 520013',
  whatsappBase: 'https://wa.me/919885898377',
  hours: '8 AM – 11 PM',
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=Dr+Babu+Rao+St,+Naidupet,+Krishnalanka,+Vijayawada,+Andhra+Pradesh+520013',
};
