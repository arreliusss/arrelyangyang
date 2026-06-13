export default function SiteFooter() {
  return (
    <footer className="py-8 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,14,0.72)] backdrop-blur-[28px]">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col items-center gap-3 text-[0.8125rem] text-[#6B6680] text-center">
        <a href="#hero" className="text-[#C4BFD0] hover:text-[#E05862] transition-colors">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
