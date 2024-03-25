export default function NavBar({ children }) {
    return (
        <nav className="bg-light border-b-[1px] border-lightest py-6 h-[6rem] flex justify-between">
            {children}
        </nav>
    );
}
