import StyleIndicator from "./components/general/StyleIndicator";
import MainContent from "./components/structure/MainContent/MainContent";
import Logo from "./components/structure/NavBar/Logo";
import NavBar from "./components/structure/NavBar/NavBar";
import Profile from "./components/structure/NavBar/Profile";
import SearchBar from "./components/structure/NavBar/SearchBar";
import SideBar from "./components/structure/SideBar/SideBar";
import SideBarItem from "./components/structure/SideBar/SideBarItem";
import {
    HomeIcon,
    SearchIcon,
    NotificationsIcon,
    SettingsIcon,
    AccountIcon,
} from "./components/SVGPATHS";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="bg-dark w-screen h-screen flex flex-col font-poppins">
            <StyleIndicator />
            <NavBar>
                <Logo />
                <SearchBar />
                <Profile />
            </NavBar>
            <div className="flex flex-row h-full">
                <SideBar>
                    <SideBarItem name="Home" path={HomeIcon} />
                    <SideBarItem name="Search" path={SearchIcon} />
                    <SideBarItem name="Settings" path={SettingsIcon} />
                    <SideBarItem
                        name="Notifications"
                        path={NotificationsIcon}
                    />
                    <SideBarItem name="Account" path={AccountIcon} />
                    <button className="text-white w-10 h-10 sm:w-[10rem] sm:h-12 my-2 sm:my-12 ml-1 flex items-center text-xl cursor-pointer bg-highlight p-2.5 sm:py-3 sm:px-5 rounded-full hover:bg-[#ff9147]">
                        <p className="hidden sm:block">Create Post</p>
                        <p className="block sm:hidden text-3xl">+</p>
                    </button>
                </SideBar>
                <MainContent>
                    <Routes>
                        <Route path="/" element={"HOME"} />
                        <Route
                            path="/search"
                            element={"implement search focus here."}
                        />
                        <Route
                            path="/results"
                            element={"results for search query"}
                        />
                        <Route
                            path="/settings"
                            element={"Edit user preferences here"}
                        />
                        <Route
                            path="/notifications"
                            element={"view any notifications here ig"}
                        />
                        <Route
                            path="/account"
                            element={
                                "this will show account info like pfp and bio and username and email and stuff"
                            }
                        />
                    </Routes>
                </MainContent>
            </div>
        </div>
    );
}
