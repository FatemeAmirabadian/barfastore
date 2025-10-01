export default function CartMessage({ message }) {
    if (!message) return null;
  
    return (
      <div
        className={`mt-4 p-3 rounded ${
          message.type === "success"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {message.text}
      </div>
    );
  }
  