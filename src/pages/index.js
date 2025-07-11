import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VendorGrid from '@/components/VendorGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rosebridge Open House</title>
        <meta
          name="description"
          content="Meet our featured wedding vendors at the Rosebridge Estate & CW Events Open House."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-peach text-[#4a3c37] font-serif">

        {/* Hero with background image */}
        <section className="relative h-[450px] sm:h-[550px] md:h-[600px] w-full">
          <div className="absolute inset-0">
            <Image
              src="/images/venue-header.jpg"
              alt="Venue exterior"
              layout="fill"
              objectFit="cover"
              priority
              className="brightness-[0.6]"
            />
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Open House</h1>
            <h2 className="text-xl sm:text-2xl font-medium mb-4">Rosebridge Estate & CW Events</h2>
            <p className="text-sm sm:text-base max-w-2xl leading-relaxed">
            Welcome to the Rosebridge Estate x CW Events Open House! We&apos;re so glad you&apos;re here.
            Take your time exploring the venue and meeting our incredible team of wedding professionals — 
            from florists to photographers, planners, designers, and more.
            This is your day to dream, connect, and envision your perfect celebration.
          </p>

          </motion.div>
        </section>

        {/* Vendors section */}
        <section className="py-8">
          <h3 className="text-center text-3xl font-semibold mb-8">Featured Vendors</h3>
          <VendorGrid />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm py-6">
          <p>July 12<sup>th</sup> 2025 | 1PM–4PM</p>
          <p>711 Old Antioch Rd. Smithville, TX</p>
        </footer>

      </main>
    </>
  );
}
