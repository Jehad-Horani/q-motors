"use client";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-widest">
          Q <span className="text-q-gold">MOTORS</span>
        </div>
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Q Motors. All rights reserved.
          Kingdom of Saudi Arabia.
        </div>
      </div>
    </footer>
  );
}
