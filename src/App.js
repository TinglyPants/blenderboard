import StyleIndicator from "./components/general/StyleIndicator";
import Logo from "./components/structure/NavBar/Logo";
import NavBar from "./components/structure/NavBar/NavBar";
import Profile from "./components/structure/NavBar/Profile";
import SearchBar from "./components/structure/NavBar/SearchBar";

export default function App() {
    return (
        <div className="bg-dark w-screen h-screen flex flex-col">
            <StyleIndicator />
            <NavBar>
                <Logo />
                <SearchBar />
                <Profile />
            </NavBar>
            {/* TODO: Make a sidebar that loads and unloads dynamically based on screen size. on mobile, an arrow will go where the logo used to to show and hide a sidebar. on desktop, it will just be a sidebar. */}
        </div>
    );
}
