import { Header } from '@/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
          <h1 className="text-4xl font-bold mt-20 mb-8">
            Welcome to <span className="text-accent">Gicheva Art</span>
          </h1>
          <p className="text-xl mb-8">
            Fine art gallery showcasing original paintings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Placeholder for paintings */}
            <div className="bg-primary-100 p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary-200 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold">Painting Title</h2>
              <p className="text-primary-700">Category</p>
              <p className="mt-2">$XXX.XX</p>
            </div>
            <div className="bg-primary-100 p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary-200 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold">Painting Title</h2>
              <p className="text-primary-700">Category</p>
              <p className="mt-2">$XXX.XX</p>
            </div>
            <div className="bg-primary-100 p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary-200 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold">Painting Title</h2>
              <p className="text-primary-700">Category</p>
              <p className="mt-2">$XXX.XX</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}