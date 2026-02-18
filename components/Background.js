export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 opacity-[0.025] noise-bg" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.01) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute top-[5%] left-[12%] w-[550px] h-[550px] rounded-full blur-[60px] bg-[radial-gradient(circle,rgba(16,185,129,0.055)_0%,transparent_65%)]" />
      <div className="absolute top-[55%] right-[3%] w-[420px] h-[420px] rounded-full blur-[55px] bg-[radial-gradient(circle,rgba(6,95,70,0.045)_0%,transparent_65%)]" />
    </div>
  );
}
