import Layout from "@/components/Layout";
import EditableText from "@/components/EditableText";
import { CheckCircle, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: <Users size={28} />, value: "500+", label: "Dealer Partners" },
  { icon: <Globe size={28} />, value: "30+", label: "Countries" },
  { icon: <Award size={28} />, value: "50+", label: "Awards" },
  { icon: <CheckCircle size={28} />, value: "1M+", label: "Devices Sold" },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-hero py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <EditableText as="h1" className="text-3xl md:text-4xl font-bold text-primary-foreground" defaultValue="About IntelliHome" />
          <EditableText as="p" className="mt-3 text-primary-foreground/70 max-w-lg" defaultValue="Pioneering smart home technology for a connected future." />
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <EditableText as="h2" className="text-2xl font-bold text-foreground mb-6" defaultValue="Our Story" />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <EditableText as="p" defaultValue="Founded in 2018, IntelliHome Devices was born from a simple vision: make smart home technology accessible, reliable, and beautiful. We believe that a connected home should enhance your life without adding complexity." />
            <EditableText as="p" defaultValue="Our team of engineers and designers work tirelessly to create products that seamlessly integrate into your daily routine. From security cameras to smart lighting, every IntelliHome device is designed with precision, tested rigorously, and built to last." />
            <EditableText as="p" defaultValue="Today, IntelliHome serves over 500 dealer partners across 30+ countries, empowering homes and businesses with intelligent automation solutions." />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center text-accent mb-3">
                  {stat.icon}
                </div>
                <EditableText as="div" className="text-3xl font-bold text-foreground" defaultValue={stat.value} />
                <EditableText as="div" className="text-sm text-muted-foreground mt-1" defaultValue={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <EditableText as="h2" className="text-2xl font-bold text-foreground mb-8 text-center" defaultValue="Our Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Innovation First", desc: "We push boundaries with cutting-edge technology and design." },
              { title: "Quality Always", desc: "Every product meets the highest standards of reliability." },
              { title: "Customer Focus", desc: "Our dealers and end-users are at the heart of everything we do." },
              { title: "Sustainability", desc: "Energy-efficient products for a greener tomorrow." },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 shadow-card">
                <EditableText as="h3" className="font-semibold text-foreground" defaultValue={v.title} />
                <EditableText as="p" className="text-sm text-muted-foreground mt-2" defaultValue={v.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
