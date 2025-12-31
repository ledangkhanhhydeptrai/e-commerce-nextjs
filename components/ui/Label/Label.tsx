interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  required: boolean;
  optional: boolean;
  variant: "default" | "bold" | "subtle" | "colorful";
  size: "sm" | "md" | "lg";
  className: string;
}

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  required = false,
  optional = false,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const variantClasses = {
    default: "text-gray-700 font-medium",
    bold: "text-gray-900 font-bold",
    subtle: "text-gray-600 font-normal",
    colorful: "text-purple-700 font-semibold"
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className={`${sizeClasses[size]} ${variantClasses[
          variant
        ]} flex items-center gap-1 ${className}`}
      >
        {children}
        {required &&
          <span className="text-red-500" title="Bắt buộc">
            *
          </span>}
        {optional &&
          <span className="text-gray-400 text-xs font-normal">(Tùy chọn)</span>}
      </label>
    </div>
  );
};
export default Label;
