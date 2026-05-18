export default function Footer() {
  return (
    <footer className="py-8 border-t border-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Siddharth Hooda. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium">Privacy Policy</a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
