type BaseButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};

export default function BaseButton({
  disabled = false,
  onClick,
}: BaseButtonProps) {
  return (
    <button
      className={`px-2 py-1  rounded-md font-semibold shadow-md ${
        disabled
          ? "bg-gray-400 text-gray-50 cursor-not-allowed"
          : "bg-blue-400 text-blue-50"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      Rematch
    </button>
  );
}
