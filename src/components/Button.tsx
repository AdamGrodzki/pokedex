import "../styles/button.css"

const Button = ({ onClick, disabled, children, className }: any) => {

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