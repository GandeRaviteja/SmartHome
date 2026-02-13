import { Link } from "react-router-dom";
import { Shield, Lightbulb, Cpu, Thermometer, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import EditableText from "@/components/EditableText";
import { products, categories } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const categoryIcons: Record<string, React.ReactNode> = {
  security: <Shield size={32} />,
  lighting: <Lightbulb size={32} />,
  automation: <Cpu size={32} />,
  climate: <Thermometer size={32} />,
};

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-hero min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt="Smart home devices"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-2xl animate-fade-in-up">
            <EditableText
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight"
              defaultValue="Control Your Home, Anytime, Anywhere."
            />
            <EditableText
              as="p"
              className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-lg"
              defaultValue="Discover premium smart home devices designed for modern living. IntelliHome Devices brings intelligence to every corner of your home."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <EditableText as="h2" className="text-3xl font-bold text-foreground" defaultValue="Product Categories" />
            <EditableText
              as="p"
              className="mt-3 text-muted-foreground max-w-md mx-auto"
              defaultValue="Explore our range of smart home solutions across four key categories."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                to={`/products?category=${cat.id}`}
                key={cat.id}
                className="group bg-card rounded-xl p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 group-hover:glow-accent transition-shadow">
                  {categoryIcons[cat.id]}
                </div>
                <h3 className="font-semibold text-lg text-foreground">{cat.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <EditableText as="h2" className="text-3xl font-bold text-foreground" defaultValue="Featured Products" />
            <EditableText as="p" className="mt-3 text-muted-foreground" defaultValue="Our most popular smart home devices." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <EditableText as="h2" className="text-3xl font-bold text-foreground" defaultValue="Why Choose IntelliHome?" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", desc: "Built with the finest materials and rigorously tested for reliability." },
              { title: "Easy Integration", desc: "All devices work seamlessly together through IntelliHub Core." },
              { title: "24/7 Support", desc: "Dedicated dealer support team available around the clock." },
              { title: "Regular Updates", desc: "OTA firmware updates keep your devices secure and feature-rich." },
              { title: "Energy Efficient", desc: "Reduce energy consumption with intelligent automation and monitoring." },
              { title: "Secure by Design", desc: "End-to-end encryption and privacy-first architecture." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <EditableText as="h3" className="font-semibold text-foreground" defaultValue={item.title} />
                  <EditableText as="p" className="text-sm text-muted-foreground mt-1" defaultValue={item.desc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <EditableText as="h2" className="text-3xl font-bold text-primary-foreground" defaultValue="Ready to Transform Your Home?" />
          <EditableText
            as="p"
            className="mt-4 text-primary-foreground/70 max-w-md mx-auto"
            defaultValue="Get in touch with us to learn more about IntelliHome devices and dealer partnerships."
          />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
