import { useState } from 'react';
import { supabase } from '@/utils/supabase';

interface SubscribeFormProps {
  onSubmit?: (data: { businessName: string; email: string; phoneNumber: string }) => void;
}

export default function SubscribeForm({ onSubmit }: SubscribeFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('subscribers')
        .insert([
          {
            business_name: formData.businessName,
            email: formData.email,
            phone_number: formData.phoneNumber,
            created_at: new Date().toISOString(),
          }
        ]);

      if (supabaseError) throw supabaseError;

      // Clear form
      setFormData({
        businessName: '',
        email: '',
        phoneNumber: ''
      });

      // Call onSubmit prop if provided
      if (onSubmit) onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
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
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-[#00AF08] to-[#00CF08] text-white px-8 py-4 rounded-xl hover:from-[#009507] hover:to-[#00BC08] transition-colors shadow-lg shadow-[#00AF08]/20 hover:shadow-xl hover:shadow-[#00AF08]/30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Submitting...' : 'Count Me In! 🎉'}
      </button>
    </form>
  );
}
