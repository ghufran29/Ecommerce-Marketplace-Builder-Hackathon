
export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    
    {
      name: "id",
      title: "ID",
      type: "string",
      readOnly: true,
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
    },
    {
      name: 'imagePath',
      title: 'Image Path',
      type: 'url',
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "number",
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: "stock_quantity",
      title: "Stock Quantity",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
  ],
};
