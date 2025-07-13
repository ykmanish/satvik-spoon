'use client';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <FaShieldAlt className="text-3xl text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-green">
          <div className="mb-12">
            <p>
              At Satvik Spoon, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our food delivery services.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              
              1. Information We Collect
            </h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, payment information</li>
              <li><strong>Order Information:</strong> Food preferences, order history, special instructions</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
              <li><strong>Location Data:</strong> Delivery location (with your permission)</li>
              <li><strong>Communication Data:</strong> Messages sent through our platform or customer service</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and deliver your food orders</li>
              <li>To communicate with you about your orders</li>
              <li>To improve our services and menu offerings</li>
              <li>To process payments and prevent fraud</li>
              <li>To comply with legal obligations</li>
              <li>To send promotional offers (only with your consent)</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery personnel (only the information needed to complete delivery)</li>
              <li>Payment processors to complete transactions</li>
              <li>Service providers who assist with our operations (under confidentiality agreements)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Secure servers and encryption for sensitive data</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Secure payment processing</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and for advertising purposes. You can manage cookie preferences through your browser settings.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of significant changes through our website or via email.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="mb-2">
              If you have questions about this Privacy Policy or your personal data:
            </p>
            <ul className="space-y-2">
              <li>Email: <Link href="mailto:privacy@yourcompany.com" className="text-green-600 hover:underline">privacy@yourcompany.com</Link></li>
              <li>Phone: <Link href="tel:+919999999999" className="text-green-600 hover:underline">+91 99999 99999</Link></li>
              <li>Address: [Your Company Address]</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Note for Users</h3>
            <p>
              By using our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}