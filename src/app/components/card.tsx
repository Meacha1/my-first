const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle = {
        width: '400px',
        height: '400px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        textAlign: 'center',
        padding: '1rem',
    };
    return (<div style={cardStyle}>
      {children}
    </div>);
};
export default Card;