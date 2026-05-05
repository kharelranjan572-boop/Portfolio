import React from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({ isOpen, navItems, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-2xl p-6">
        <div className="flex items-center justify-between mb-8">
          <p className="text-lg font-semibold">Menu</p>
          <button
            className="text-slate-700 hover:text-slate-900"
            onClick={onClose}
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>

        <nav>
          <ul className="space-y-6 text-base">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="block text-slate-900 hover:text-slate-600"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
        aria-label="Close overlay"
      />
    </div>
  );
};
