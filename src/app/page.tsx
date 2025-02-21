import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold"> Quick Bites</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#restaurants" className="hover:underline">Restaurants</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#contact" className="hover:underline">Login/SignUp</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section id="home" className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to  Quick Bites</h2>
          <p className="text-lg">Get your favorite meals delivered to your doorsteps.</p>
        </section>

        <section id="restaurants" className="w-full">
          <h2 className="text-3xl font-bold mb-4">Featured Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-4 rounded-lg">
              <Image src="/restaurant1.jpg" alt="Restaurant 1" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">Restaurant 1</h3>
              <p>Delicious meals and quick delivery.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <Image src="/restaurant2.jpg" alt="Restaurant 2" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">Restaurant 2</h3>
              <p>Fresh ingredients and tasty dishes.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <Image src="/restaurant3.jpg" alt="Restaurant 3" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">Restaurant 3</h3>
              <p>Wide variety of cuisines to choose from.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="row-start-3 w-full flex justify-center items-center p-4 bg-gray-800 text-white">
        <p>&copy; 2025 Quick Bites. All rights reserved.</p>
      </footer>
    </div>
  );
}