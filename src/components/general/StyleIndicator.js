export default function StyleIndicator() {
    return (
        <div className="absolute bg-red-700 text-white">
            <p className="block md:hidden">Small</p>
            <p className="hidden md:block lg:hidden">Medium</p>
            <p className="hidden md:hidden lg:block xl:hidden">Large</p>
            <p className="hidden md:hidden lg:hidden xl:block 2xl:hidden">
                Extra Large
            </p>
            <p className="hidden md:hidden lg:hidden xl:hidden 2xl:block 3xl:hidden">
                Extra Extra Large
            </p>
        </div>
    );
}
