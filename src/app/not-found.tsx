export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
        Go back to Home
      </a>
    </div>
  );
}