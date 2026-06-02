import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* BRAND */}
        <h2 className="text-3xl font-black mb-2">
          Bharatvaani Prangan
        </h2>

        <p className="text-gray-400 mb-6">
          Truthful, fast and people-focused journalism.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-2xl">

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/profile.php?id=61590030426993"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/bharatvaani_prangan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          {/* YOUTUBE */}
          <a
            href="https://www.youtube.com/@BharatvaaniPrangan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaYoutube />
          </a>

          {/* TWITTER/X */}
          <a
            href="https://x.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaXTwitter />
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-gray-500">
          © 2026 Bharatvaani Prangan. All rights reserved.
        </div>

      </div>

    </footer>
  )
}