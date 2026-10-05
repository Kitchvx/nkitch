export default function Footer() {
  return (
    <footer className="text-muted text-sm max-w-5xl mx-auto px-6 py-6 border-t border-border">
      <p>
        &copy; {new Date().getFullYear()} Nathan Kitching. All rights reserved.
      </p>
    </footer>
  );
}
