import Image from 'next/image';
import SubscribeForm from './SubscribeForm';

export default function Hero() {
  const handleSubscribe = (data: { email: string }) => {
    // Handle newsletter signup
    console.log('Email submitted:', data.email);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#00AF08]/10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#00AF08]/10 to-transparent rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-tr from-[#00AF08]/10 to-transparent rounded-tr-full -z-10" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src="/Makaan_Logo_w_text.png"
                alt="Makaan Logo"
                width={300}
                height={100}
                className="mb-8"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#00AF08]/10 rounded-full -z-10 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join Our <span className="text-[#00AF08]">Muslim</span> Business Community
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Be part of our invite-only platform connecting you with amazing Muslim-owned businesses in your area. Access is limited - join the waitlist today.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#00AF08]/10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
              <p className="text-gray-600 mb-6">
                Subscribe for the latest updates and exclusive offers.
              </p>
              <SubscribeForm onSubmit={handleSubscribe} />
              <p className="text-sm text-gray-500 mt-4 text-center">
                Be the first to know when we launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
