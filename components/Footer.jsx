export default function Footer() {
  return (
    <footer className="py-8 border-t-[3.5px] border-border-color bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/80 font-bold text-sm">
          &copy; {new Date().getFullYear()} Siddharth Hooda. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-foreground/80 hover:text-primary font-black uppercase text-xs tracking-wider transition-colors">Privacy Policy</a>
          <a href="#" className="text-foreground/80 hover:text-primary font-black uppercase text-xs tracking-wider transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

