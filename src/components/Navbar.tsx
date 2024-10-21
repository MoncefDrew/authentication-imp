import  Link  from "next/link";


const Navbar = () =>{
    return(
        <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b borderzinc-300 z-[10] py-2">
            <div className="container max-w-7x1 h-full mx-auto flex items-center justify-between gap-2">
                {/* logo*/}
                <Link href='/' className="flex gap-2 items-center">
                    <p className="flex gap-2 items-center">Breaddit</p>

                </Link>

            </div>
        </div>
    )
}
export default Navbar;
