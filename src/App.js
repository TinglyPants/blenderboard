import NavBar from "./components/structure/NavBar/NavBar";
import SearchBar from "./components/structure/NavBar/SearchBar";

export default function App() {
    return (
        <div className="bg-dark w-screen h-screen flex flex-col">
            <NavBar>
                <SearchBar />
            </NavBar>
        </div>
    );
}
