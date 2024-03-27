export default function MainContent({ children }) {
    return (
        <div className="size-full bg-dark text-white overflow-scroll">
            {children}
        </div>
    );
}
