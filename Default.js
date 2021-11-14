import { products } from "./constants/Product.js";
import Product from "./model/ProductSchema.js";

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Data successfully imported");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default DefaultData;
