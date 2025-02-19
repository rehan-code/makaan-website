import { FeatureCard } from './features/FeatureCard';
import { features } from './features/featureData';

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#00AF08]/5 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Makaan?</h2>
          <p className="text-gray-600">
            Discover a platform built with the Muslim community in mind, offering unique features to enhance your shopping experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
