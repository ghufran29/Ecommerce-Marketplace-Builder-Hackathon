import axios from 'axios';
import { client } from '@/sanity/lib/client';

type Product = {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  colors: string[];
  reviews: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stock_quantity: number;
  category: string;
};

export async function GET() {
  try {
    const { data }: { data: Product[] } = await axios.get('https://677fc37f0476123f76a7fbbb.mockapi.io/product');

    for (const product of data) {
      await client.create({
        _type: 'product',
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: product.price,
        description: product.description,
        colors: product.colors,
        reviews: product.reviews,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stock_quantity: product.stock_quantity,
        category: product.category,
      });
    }

    return new Response(JSON.stringify({ message: 'Data inserted successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error inserting data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch or insert data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}