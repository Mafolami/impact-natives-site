export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Impact Natives. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="hover:text-accent mx-2">Privacy Policy</a>
          <a href="#" className="hover:text-accent mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
