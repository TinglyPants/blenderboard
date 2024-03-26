export default function Profile() {
    return (
        <div className="h-full mr-[3rem] sm:mr-[4rem] flex flex-row flex-row-reverse">
            <div className="bg-highlight aspect-square h-full rounded-full" />
            <div className="flex flex-col items-end hidden md:flex">
                <p className="text-white mx-4 text-lg">Username WooHoo</p>
                <p className="text-lightest mx-4 text-md">
                    emailaddress@potatoes.com
                </p>
            </div>
        </div>
    );
}
