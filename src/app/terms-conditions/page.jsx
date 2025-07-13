'use client';
import Link from 'next/link';
import { FaBalanceScale, FaShoppingBag, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

export default function TermsConditions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <FaBalanceScale className="text-3xl text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-green">
          <div className="mb-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="flex items-start gap-2">
              <FaInfoCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span>
                Please read these Terms and Conditions carefully before using our food delivery services. 
                By placing an order, you agree to be bound by these terms.
              </span>
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Service Overview</h2>
            <p>
              Satvik Spoon provides freshly cooked vegetarian food delivery services in [Your Service Area]. 
              We specialize in bulk orders for events, parties, and corporate functions.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              
              2. Ordering Process
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All bulk orders require minimum 24 hours advance notice</li>
              <li>Orders are confirmed only after payment or advance deposit</li>
              <li>Menu items are subject to availability</li>
              <li>We reserve the right to refuse service</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are in INR and inclusive of GST unless stated otherwise</li>
              <li>Bulk order pricing may differ from regular menu pricing</li>
              <li>We accept online payments, UPI, and cash on delivery (for select orders)</li>
              <li>Full payment may be required for first-time customers or large orders</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delivery Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free delivery for orders above ₹2,499 (within our service area)</li>
              <li>Delivery charges apply for smaller orders or distant locations</li>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Recipient must be available to accept delivery at the provided address</li>
              <li>We are not responsible for delays due to traffic, weather, or other unforeseen circumstances</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
             
              5. Cancellations & Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made 48+ hours before delivery: Full refund</li>
              <li>Cancellations made 24-48 hours before delivery: 50% refund</li>
              <li>Cancellations made less than 24 hours before delivery: No refund</li>
              <li>Refunds processed within 7-10 business days</li>
              <li>No refunds for quality complaints after 2 hours of delivery</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Food Safety & Quality</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We maintain highest hygiene standards in food preparation</li>
              <li>All food is prepared in our licensed kitchen</li>
              <li>We are not liable for any food allergies - customers must inform about allergies in advance</li>
              <li>Food must be consumed within 4 hours of delivery for optimal quality</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Customer Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate delivery address and contact information</li>
              <li>Ensure someone is available to receive the order</li>
              <li>Inspect food upon delivery and report any issues immediately</li>
              <li>Provide adequate serving utensils and arrangements at your venue</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liability Limitations</h2>
            <p className="mb-4">
              [Your Company Name] shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Food quality issues arising from improper handling after delivery</li>
              <li>Events beyond our reasonable control (natural disasters, strikes, etc.)</li>
              <li>Maximum liability limited to order value</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
            <p>
              All content on our website, menus, and marketing materials are our exclusive property. 
              Unauthorized use is prohibited.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p>
              These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in [Your City].
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the modified terms.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="mb-2">
              For questions about these Terms:
            </p>
            <ul className="space-y-2">
              <li>Email: <Link href="mailto:legal@yourcompany.com" className="text-green-600 hover:underline">legal@yourcompany.com</Link></li>
              <li>Phone: <Link href="tel:+919999999999" className="text-green-600 hover:underline">+91 99999 99999</Link></li>
              <li>Address: [Your Registered Company Address]</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Acceptance of Terms</h3>
            <p>
              By placing an order with [Your Company Name], you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}