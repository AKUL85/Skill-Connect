export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}
