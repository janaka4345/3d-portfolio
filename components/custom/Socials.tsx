import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

const Socials = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-fit mx-auto md:w-full md:mx-0">

            <Link target="_blank" className={cn(buttonVariants({ variant: 'default' }), "w-fit")} href='https://www.linkedin.com/in/janaka-kariyawasam1256?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSMPOtSkJRUOqhO1DT7aysg%3D%3D'> <svg className="w-6 h-6 " fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-1 1.5 1.6 1.6 0 0 1-1.7-.4 1.6 1.6 0 0 1 1.1-2.7 1.6 1.6 0 0 1 1.6 1.6ZM7.2 8.8H4v10.7h3.2V8.8Z" /></svg>
            </Link>
            <Link target="_blank" className={cn(buttonVariants({ variant: 'default' }), "w-fit")} href='https://github.com/janaka4345'>
                <svg className="w-6 h-6 " fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2a9.8 9.8 0 0 0-6.5 2.4 10.3 10.3 0 0 0-3.4 6.2 10.5 10.5 0 0 0 1.3 7A10 10 0 0 0 8.8 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1a2.7 2.7 0 0 0-1-1.5c-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1l.6.7a2 2 0 0 0 2.3.2c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5a4 4 0 0 1 1-2.8 3.8 3.8 0 0 1 .2-2.7s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0 1.3-7 10.3 10.3 0 0 0-3.4-6.2A9.8 9.8 0 0 0 12 2Z" clipRule="evenodd" /></svg>
            </Link>
        </div>
    )
}
export default Socials