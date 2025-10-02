import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function FavoriteButton({ isWishlisted, onToggle }) {

  return (
    <button
      onClick={() => onToggle(!isWishlisted)}
      className="text-2xl transition-colors"
    >
      {isWishlisted ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-red-500" />
      )}
    </button>
  );
}
