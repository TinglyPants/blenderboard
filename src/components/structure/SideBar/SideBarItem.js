import SvgIcon from "../../general/SvgIcon";

export default function SideBarItem({ name, path }) {
    //replace onClick later with a navigate for react router

    return (
        <div
            className="text-white flex flex-row h-8 my-[0.5rem] group"
            onClick={() => {
                console.log("Sidebar item clicked: " + name);
            }}
        >
            <SvgIcon name={name} path={path} />
            <button className="group-hover:text-highlight text-xl hidden sm:block">
                {name}
            </button>
        </div>
    );
}
