import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { getProductById } from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
          <Link to="/products" className="mt-4 inline-flex items-center text-accent hover:underline">
            <ArrowLeft size={16} className="mr-1" /> Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-section-alt border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-secondary rounded-2xl overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                {product.name}
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-foreground mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Mail size={16} /> Contact for Details
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h3 className="font-semibold text-2xl text-foreground mb-6">Specifications</h3>
            <div className="bg-card rounded-xl shadow-card overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-secondary/50" : ""}>
                      <td className="px-6 py-4 text-sm font-medium text-foreground w-1/3">{key}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
