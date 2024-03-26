export default function Profile() {
    return (
        <div className="h-full flex flex-row flex-row-reverse mr-[2rem] lg:mr-[4rem]">
            <div className="bg-highlight w-[3rem] h-[3rem] rounded-full" />
            <div className="flex-col items-end hidden md:flex">
                <p className="text-white mx-4 text-lg">Username WooHoo</p>
                <p className="text-lightest mx-4 text-md">
                    emailaddress@potatoes.com
                </p>
            </div>
        </div>
    );
}
