import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

export function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay * 0.001 }}
      className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-[#00AF08]/10 hover:scale-[1.02] hover:-translate-y-1"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-[#00AF08] to-[#00CF08] rounded-2xl mb-6 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#00AF08]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
