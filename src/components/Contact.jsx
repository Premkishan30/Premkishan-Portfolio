import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Code } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using Formspree for form submission
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setSubmitMessage('Thank you for your message! I\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly at psuvarnkar3@gmail.com');
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="card-fade">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a 
                    href="mailto:psuvarnkar3@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    psuvarnkar3@gmail.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a 
                    href="tel:+918421096403"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    +91 8421096403
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Available 9 AM - 9 PM IST</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:psuvarnkar3@gmail.com?subject=Job Opportunity&body=Hi Premkishan, I'd like to discuss a job opportunity with you."
                  className="block w-full text-left p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📧 Email for Job Opportunities
                </a>
                <a
                  href="mailto:psuvarnkar3@gmail.com?subject=Project Collaboration&body=Hi Premkishan, I have a project idea I'd like to discuss with you."
                  className="block w-full text-left p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  🤝 Collaborate on Projects
                </a>
                <a
                  href="mailto:psuvarnkar3@gmail.com?subject=Technical Discussion&body=Hi Premkishan, I'd like to discuss some technical topics with you."
                  className="block w-full text-left p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  💬 Technical Discussion
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/premkishan-suvarnkar-36a538290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-200"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Premkishan30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-500 transition-colors duration-200"
                  title="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/premkishan30/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-200"
                  title="LeetCode Profile"
                >
                  <Code size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-fade">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <p className="text-gray-400 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Freelance Work">Freelance Work</option>
                  <option value="Technical Discussion">Technical Discussion</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please provide details about your inquiry, project requirements, or any specific questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hover w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`mt-4 p-4 rounded-lg text-center ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-900 text-green-300 border border-green-700' 
                    : 'bg-red-900 text-red-300 border border-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Required fields. Your information will be kept confidential and used only to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;