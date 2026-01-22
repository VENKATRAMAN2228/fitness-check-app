function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">
        Fitness Check App
      </h1>

      <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
        Logout
      </button>
    </header>
  );
}

export default Header;
