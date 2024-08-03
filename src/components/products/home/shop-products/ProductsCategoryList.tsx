import { productsCategoryListItem } from "@/constants";
import { ProductCategoryItem } from "./ProductCategoryItem";
import "animate.css";
export const ShopProductsList = () => {
  return (
    <ul className="flex items-center justify-center gap-x-10 mt-32">
      {productsCategoryListItem.map(({ title, image }, index) => (
        <li key={`category - ${index + 1}`}>
          <ProductCategoryItem title={title} image={image} />
        </li>
      ))}
    </ul>
  );
};
