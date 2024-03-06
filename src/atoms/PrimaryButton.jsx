function PrimaryButton({ children, disabled, loading, ...props }) {
  return (
    <button {...props} disabled={disabled || loading}>
      {children}
    </button>
  );
}

export default PrimaryButton;
