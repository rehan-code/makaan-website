import { useState } from 'react';

interface SubscribeFormProps {
  onSubmit: (data: { businessName: string; email: string; phoneNumber: string }) => void;
}

export default function SubscribeForm({ onSubmit }: SubscribeFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phoneNumber: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="What's your business called?"
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#00AF08] focus:ring-2 focus:ring-[#00AF08]/20 transition-all outline-none bg-white/90"
          required
        />
      </div>
      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your business email"
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#00AF08] focus:ring-2 focus:ring-[#00AF08]/20 transition-all outline-none bg-white/90"
          required
        />
      </div>
      <div className="relative">
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Best number to reach you"
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#00AF08] focus:ring-2 focus:ring-[#00AF08]/20 transition-all outline-none bg-white/90"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#00AF08] to-[#00CF08] text-white px-8 py-4 rounded-xl hover:from-[#009507] hover:to-[#00BC08] transition-all shadow-lg shadow-[#00AF08]/20 hover:shadow-xl hover:shadow-[#00AF08]/30"
      >
        Count Me In! 🎉
      </button>
    </form>
  );
}
