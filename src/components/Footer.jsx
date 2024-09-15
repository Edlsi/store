import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
  <p className='text-4xl'>EGA</p>
  <p className='text-lg bg-slate-400'>etgame store</p>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <p className='text-4xl'>store</p>
  <a href="/about-us" className='text-lg hover:underline'>about us</a>
  <a href="/contact-us" className='text-lg hover:underline'>contact us</a>
  <a href="/feedbacks" className='text-lg hover:underline'>feedbacks</a>
  
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <p className='text-4xl'>Support</p>
  <a href="/about-us" className='text-lg hover:underline'> Help center</a>
  <a href="/contact-us" className='text-lg hover:underline'>terms of service</a>
  <a href="/feedbacks" className='text-lg hover:underline'>Legal</a>
  <a href="/feedbacks" className='text-lg hover:underline'>privacy policy</a>
 </div>
 <div style={{ display: 'flex', flexDirection: 'column' }}>
  <p className='text-4xl'>stay up to date</p>
 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <input
    id="user-text"
    type="text"
    placeholder="Put your message here"
    className="text-lg border border-gray-300 p-2 rounded-md flex-1"
  />
  <button
    onClick={() => {
      const userInput = document.getElementById('user-text').value;
      if (userInput) {
        window.location.href = `https://t.me/edltad?text=${encodeURIComponent(userInput)}`;
      }
    }}
    className="bg-blue-500 text-black p-2 rounded-md flex items-center justify-center"
  >
    <i className="fab fa-telegram-plane text-xl"></i>
  </button>
</div>
</div>


{/*<ul className="flex ">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>*/}
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
