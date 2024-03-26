export default function SideBar({ children }) {
    return (
        <div className="h-full w-[3.5rem] sm:w-[12rem] lg:w-[22rem] border-r-[1px] border-lightest bg-dark flex flex-col justify-start pt-1 sm:pt-[4rem] pl-1 lg:pl-[5rem]">
            {children}
        </div>
    );
}
