import Image from 'next/image';
import { motion } from 'framer-motion';

const vendors = [
  {
    name: 'Rosebridge Estate',
    image: '/logos/rosebridge.png',
    instagram: 'https://www.instagram.com/rosebridgeestate',
    description:
      'A timeless wedding venue featuring elegant architecture and picturesque grounds — the perfect backdrop for your special day.',
  },
  {
    name: 'CW Events',
    image: '/logos/cwevents.png',
    instagram: 'https://www.instagram.com/cwevents_austin',
    description:
      'Full-service event planning and design for modern Texas couples. CW Events brings expertise, organization, and inspiration to life.',
  },
  {
    name: 'Lone Star Drafts',
    image: '/logos/lonestardrafts.png',
    instagram: 'https://www.instagram.com/lonestardrafts',
    description:
      'Mobile bartending that brings the bar to you — stylish taps, signature cocktails, and southern charm served with every pour.',
  },
  {
    name: 'A&Bé Bridal Shop',
    image: '/logos/abebridal.png',
    instagram: 'https://www.instagram.com/aandbe_bridalshop',
    description:
      'Modern bridalwear for every kind of bride. Discover curated gowns and accessories that match your vision and vibe.',
  },
  {
    name: 'Gypsy Floral',
    image: '/logos/gypsyfloral.png',
    instagram: 'https://www.instagram.com/gypsyfloral',
    description:
      'Fine art floral designs crafted with passion — from romantic bouquets to lush installations that elevate every space.',
  },
  {
    name: 'Vibe Vision Productions',
    image: '/logos/vibevision.png',
    instagram: 'https://www.instagram.com/vibe_vision_productions',
    description:
      'Capturing the emotion and energy of your day through cinematic video — real moments, real memories, beautifully preserved.',
  },
  {
    name: 'Sophia Monetti Photography',
    image: '/logos/sophiamonetti.png',
    instagram: 'https://www.instagram.com/sophiamonettiphoto',
    description:
      'Authentic, elegant wedding photography that tells your story with warmth, detail, and a timeless editorial touch.',
  },
  {
    name: 'Monica Danielle Photography',
    image: '/logos/monicadanielle.png',
    instagram: 'https://www.instagram.com/monicadaniellephoto',
    description:
      'Photography + design with heart. Monica captures candid joy and curated details in a style that\'s both dreamy and personal.',
  },
  {
    name: 'The Storie Booth',
    image: '/logos/storiecollective.png',
    instagram: 'https://www.instagram.com/thestoriebooth?igsh=MXFpZGpzYXRpcm5iYQ==',
    description:
      'Luxury photo booth experiences with a stylish twist — The Storie Booth adds fun, flair, and unforgettable moments to your big day.',
  },
  {
    name: 'La Pera Austin',
    image: '/logos/lapera.png',
    instagram: 'https://www.instagram.com/laperaaustin?igsh=MTVmeXNlcXFnd3gxMw==',
    description:
      'A mobile culinary experience delivering elegant Latin fusion bites with bold flavor — perfect for weddings and private events.',
  },
  {
    name: 'Mike’s Dance Floor Rentals',
    image: '/logos/mikesdancefloorrentals.png',
    instagram: 'https://www.instagram.com/mikesdancefloorrentals?igsh=MWRzeXZ6ZGFtMWFzOQ==',
    description:
      'From elegant wood to LED light-up dance floors, Mike’s delivers unforgettable vibes to your reception. Stylish, safe, and party-ready.',
  },
];

export default function VendorGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4">
      {vendors.map((vendor, index) => (
        <motion.a
          key={index}
          href={vendor.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center space-y-2 transition duration-300 active:scale-95"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative rounded-full shadow-lg bg-white">
            <Image
              src={vendor.image}
              alt={vendor.name}
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <p className="text-sm font-semibold text-[#4a3c37]">{vendor.name}</p>
          <p className="text-xs text-[#4a3c37] max-w-[11rem] leading-snug">
            {vendor.description}
          </p>
        </motion.a>
      ))}
    </div>
  );
}
