import { Link, useLocation } from "react-router-dom";
import { useState, useCallback } from "react";
import { Menu, X, Pencil, PencilOff, Download } from "lucide-react";
import { useEditMode } from "@/contexts/EditContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { isEditMode, toggleEditMode } = useEditMode();

  const handleDownload = useCallback(() => {
    window.print();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-nav backdrop-blur-md border-b border-nav/10 print:hidden">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">IH</span>
          </div>
          <span className="text-nav-foreground font-bold text-lg tracking-tight">IntelliHome</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-nav-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Edit & Download buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleEditMode}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              isEditMode
                ? "bg-accent text-accent-foreground"
                : "border border-nav-foreground/20 text-nav-foreground/80 hover:bg-nav-foreground/10"
            }`}
            title={isEditMode ? "Exit edit mode" : "Enter edit mode"}
          >
            {isEditMode ? <PencilOff size={14} /> : <Pencil size={14} />}
            {isEditMode ? "Done" : "Edit"}
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-nav-foreground/20 text-nav-foreground/80 hover:bg-nav-foreground/10 transition-colors"
            title="Download as PDF"
          >
            <Download size={14} />
            Download
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-nav-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-nav border-t border-nav-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  location.pathname === link.to ? "text-accent" : "text-nav-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-nav-foreground/10">
              <button
                onClick={toggleEditMode}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isEditMode
                    ? "bg-accent text-accent-foreground"
                    : "border border-nav-foreground/20 text-nav-foreground/80"
                }`}
              >
                {isEditMode ? <PencilOff size={14} /> : <Pencil size={14} />}
                {isEditMode ? "Done" : "Edit"}
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-nav-foreground/20 text-nav-foreground/80"
              >
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
