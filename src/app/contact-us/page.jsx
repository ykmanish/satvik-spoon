'use client';
import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    queryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        queryType: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Contact Header - Kept as is */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-6 heading">
            Get in Touch
          </h1>
          <p className="text-sm md:text-xl text-zinc-100 max-w-3xl mx-auto">
            We're here to help with your questions about meals, subscriptions, or bulk orders.
          </p>
        </div>
      </section>

      {/* Enhanced Contact Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards - Enhanced Design */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-4  lg:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 heading">
                  Reach Out to Us
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone Card */}
                  <div className="bg-gradient-to-br from-green-50 to-white p-4 lg:p-6 rounded-xl border border-green-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <FaPhoneAlt className="text-green-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-4">Speak directly with our team</p>
                    <Link 
                      href="tel:+91XXXXXXXXXX" 
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
                    >
                      +91 XXXXXXXXXX
                      <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </div>
                  
                  {/* WhatsApp Card */}
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <FaWhatsapp className="text-green-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-4">Instant messaging support</p>
                    <Link 
                      href="https://wa.me/919999999999" 
                      target="_blank"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-full transition-all"
                    >
                      <FaWhatsapp className="mr-2" />
                      Start Chat
                    </Link>
                  </div>
                  
                  {/* Email Card */}
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <FaEnvelope className="text-green-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-4">For detailed inquiries</p>
                    <Link 
                      href="mailto:orders@satvikspoon.in" 
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
                    >
                      orders@satvikspoon.in
                      <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </div>
                  
                  {/* Location Card */}
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <FaMapMarkerAlt className="text-green-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 mb-4">Service areas</p>
                    <p className="text-gray-700 font-medium">Pune & PCMC, Maharashtra</p>
                  </div>
                </div>
                
                {/* Business Hours - Enhanced */}
                <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100">
                  <div className="flex flex-col  gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                     <FaClock className="text-green-600 text-xl" />
                    </div>
                   
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-700 font-medium">Mon-Sat:</span>
                        <span className="text-gray-600">9:30 AM - 8:30 PM</span>
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-gray-700 font-medium">Sunday:</span>
                        <span className="text-gray-600">Closed</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-2">(Closed for rest & recharge)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Inquiry Form */}
            <div className="bg-white rounded-3xl  p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 heading">
                Send Us a Message
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p>Thank you! Your message has been sent. We'll respond soon.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all placeholder-gray-400"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-2">
                      What can we help you with? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="queryType"
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-700"
                    >
                      <option value="">Select an option</option>
                      <option value="Trial">Trial Meal Inquiry</option>
                      <option value="Subscription">Subscription Questions</option>
                      <option value="Bulk">Bulk Order Request</option>
                      <option value="Feedback">Feedback/Suggestions</option>
                      <option value="Other">Other Questions</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all placeholder-gray-400"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-all ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-md'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}