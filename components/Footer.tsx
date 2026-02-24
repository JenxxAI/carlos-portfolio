export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-8 flex-wrap gap-3"
      style={{ borderTop: '1px solid #1e1e35' }}
    >
      <p className="font-mono text-xs tracking-widest" style={{ color: '#6b6b8a' }}>
        © {new Date().getFullYear()} <span className="text-purple">Carlos Miguel V. Torres</span>
      </p>
      <p className="font-mono text-xs tracking-widest" style={{ color: '#6b6b8a' }}>
        Built with <span className="text-purple">♥</span> & lots of coffee ☕
      </p>
    </footer>
  )
}
