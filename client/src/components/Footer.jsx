import { Link } from 'react-router-dom';
import { BsFacebook, BsTelegram,  BsWhatsapp } from 'react-icons/bs';
import logo from '../assets/logo.png';

export default function FooterCom() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-6">
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <Link to="/" className="flex flex-col items-start text-left">
              <img src={logo} alt="logo" className="w-16 mb-2" />
              <span className="text-sm sm:text-lg uppercase">Garaad Kabe</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
             
             
            {/* <div>
              <p className="font-semibold uppercase">Securety</p>
              <FooterLink href="./Termes" label="Termes" />
              <FooterLink href="./Privice" label="Privice" />
            </div> */}
            <div className=' mr-24'>
              <p className="font-semibold">ABOUT US</p>
              <FooterLink href="./contact" label="Contact Us" />
              <FooterLink href="./About" label="About" />
              <FooterLink href="#" label="Resources" />
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="flex justify-center mb-4 space-x-6">
          <FooterIcon href="https://www.facebook.com/profile.php?id=100092308092206" icon={BsFacebook} />
          <FooterIcon href="https://t.me/abdirahamaanhassan" icon={BsTelegram} />
          <FooterIcon href="https://wa.me/+251915180432" icon={BsWhatsapp} />
        </div>
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

// eslint-disable-next-line react/prop-types
function FooterIcon({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400"
    >
      <Icon size={24} />
    </a>
  );
}

// eslint-disable-next-line react/prop-types
function FooterLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 block mt-2"
    >
      {label}
    </a>
  );
}

function FooterDivider() {
  return (
    <div className="border-t border-gray-700 my-6"></div>
  );
}
