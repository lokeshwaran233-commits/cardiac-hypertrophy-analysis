import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1E3A5F]/70 bg-[#0D1B2A]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <div>
          <div className="text-sm font-semibold text-[#E2E8F0]">Lokeshwaran R</div>
          <div className="text-xs text-[#94A3B8]">PG Gold Medallist · Biochemistry · University of Madras</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#94A3B8]">
          <a href="mailto:lokeshwaran233@gmail.com" className="flex items-center gap-1.5 hover:text-[#00D4FF]">
            <Mail className="h-3.5 w-3.5" /> lokeshwaran233@gmail.com
          </a>
          <a href="https://linkedin.com/in/lokesh-waran-r/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#00D4FF]">
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <a href="https://github.com/lokeshwaran233-commits" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#00D4FF]">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Chennai, India</span>
        </div>
      </div>
    </footer>
  );
}