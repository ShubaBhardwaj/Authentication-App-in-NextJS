export default async function ProfilePage({params}:any) {
    const { id } = await params 
    return (
        <div className="h-screen bg-black flex flex-col md:flex-row">
            {/* Image Section - Hidden on mobile, shown on md and up */}
            <div className="hidden md:flex md:flex-1 bg-neutral-900 items-center justify-center ">
                <div className="w-full h-full bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden">
                    <img
                        src="/images/signup_page.png"
                        alt="Handmade crafts"
                        className="w-full h-full object-cover"
                    />
                    <div className="flex h-screen items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-5xl ">
                            YOUR PROFILE <br />
                            <span className="text-gray-700">User ID: {id}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}