import React from 'react';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import Map from '../ui/Map';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Contact</h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500 mb-2">Phone</p>
            <a
              href="#"
              className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors flex items-center gap-2"
            >
              +7 (499) 350-66-04
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500 mb-2">Address</p>
            <p className="text-lg font-semibold text-gray-900 flex items-start gap-2">
           
              <span>
                Dubininskaya Ulitsa, 96,<br />
                Moscow, Russia, 115093
              </span>
            </p>
          </div>

          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500 mb-2">Socials</p>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-green-600 transition-colors"
              >
                <InstagramOutlined />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-green-600 transition-colors"
              >
                <WhatsAppOutlined />
              </a>
            </div>
          </div>

          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500 mb-2">Working Hours</p>
              24 hours a day
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <Map />
        </div>
      </div>
    </footer>
  );
}