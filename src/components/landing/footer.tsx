export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-6 text-center text-muted-foreground">
        <p>© {currentYear} Pulat Zafarov. All rights reserved.</p>
      </div>
    </footer>
  );
}
