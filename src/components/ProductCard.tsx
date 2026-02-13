import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-accent uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-semibold text-lg mt-1 text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.shortDescription}
        </p>
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center mt-4 text-sm font-medium text-accent hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
