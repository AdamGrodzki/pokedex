import "../styles/button.css"

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
  }
  

const Button = ({ onClick, disabled, children, className }: ButtonProps) => {

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
 
export default Button;