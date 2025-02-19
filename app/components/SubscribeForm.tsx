import { useState } from 'react';

interface SubscribeFormProps {
  onSubmit: (data: { email: string }) => void;
}

export default function SubscribeForm({ onSubmit }: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#00AF08] focus:ring-2 focus:ring-[#00AF08]/20 transition-all outline-none bg-white/90"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#00AF08] to-[#00CF08] text-white px-8 py-4 rounded-xl hover:from-[#009507] hover:to-[#00BC08] transition-all shadow-lg shadow-[#00AF08]/20 hover:shadow-xl hover:shadow-[#00AF08]/30"
      >
        Get Notified!
      </button>
    </form>
  );
}
