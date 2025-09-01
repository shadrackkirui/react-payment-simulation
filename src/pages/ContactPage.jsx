import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Got questions or need support? We’d love to hear from you.
      </p>
      <ul className="text-gray-700">
        <li>Email: <a href="mailto:support@compshop.com" className="text-blue-500">support@compshop.com</a></li>
        <li>Phone: +254 700 123 456</li>
        <li>Address: Nairobi, Kenya</li>
      </ul>
    </div>
  );
};

export default ContactPage;
