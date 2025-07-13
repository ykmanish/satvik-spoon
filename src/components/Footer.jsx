'use client';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; // Using FcGoogle for Google Business
import { FaWhatsapp } from 'react-icons/fa'; // For WhatsApp
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#07200F] text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start border-b border-dotted border-gray-500 pb-8">
        {/* Column 1: About Satvik Spoon */}
        <div>
          <img
                src="https://mediumslateblue-salmon-778700.hostingersite.com/wp-content/uploads/2023/04/Satvik-Spoon-Final1.png"
                alt="Logo"
                className="h-14 w-36 mb-3"
              />
          <p className="text-sm text-gray-300 mb-4">
            A pure veg cloud kitchen serving homestyle thalis, salad & soup plans, and bulk meals - delivered across Pune & PCMC.
          </p>
          <p className="text-sm font-semibold text-green-400">Spoonful of wellness in every meal.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/daily-meals" className="hover:text-green-400">Daily Meals</Link></li>
            <li><Link href="/salads-soups" className="hover:text-green-400">Salads & Soups</Link></li>
            <li><Link href="/bulk-orders" className="hover:text-green-400">Bulk Orders</Link></li>
            <li><Link href="/blog-faqs" className="hover:text-green-400">Blog & FAQs</Link></li>
           
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Phone: +91 XXXXXXXXXX</li>
            <li>
              <Link href="https://wa.me/91XXXXXXXXXX" className="hover:text-green-400 flex items-center gap-2">
                <FaWhatsapp className="text-green-400" /> WhatsApp: Start Chat
              </Link>
            </li>
            <li>
              <Link href="mailto:orders@satvikspoon.in" className="hover:text-green-400">
                Email: orders@satvikspoon.in
              </Link>
            </li>
            <li>Service Areas: Pune & PCMC</li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <Link href="https://instagram.com/satvikspoon" target="_blank" className="hover:text-green-400">
              <FaInstagram />
            </Link>
            <Link href="https://facebook.com/satvikspoon" target="_blank" className="hover:text-green-400">
              <FaFacebookF />
            </Link>
            <Link href="https://g.page/satvikspoon" target="_blank" className="hover:text-green-400">
              <FcGoogle />
            </Link>
            <Link href="https://linkedin.com/company/satvikspoon" target="_blank" className="hover:text-green-400">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        <p className='hidden lg:block' >© 2025 Satvik Spoon – Kesari Nandan LLP | All Rights Reserved</p>
        <p className='lg:hidden mb-2' >© 2025 Satvik Spoon</p>
        <p className='lg:hidden mb-2'>Kesari Nandan LLP | All Rights Reserved</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-conditions" className="hover:text-green-400">Terms & Conditions</Link>
        </div>
        <div className="flex mt-2 gap-1">
         Designed with ❤️ by<Link href="https://quantafile.com" className='hover:underline'>Quantafile</Link>
        </div>
      </div>
    </footer>
  );
}