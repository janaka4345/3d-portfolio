import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function BillboardLoading(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}
            className={cn('bg-white ', props.className)} >
            <svg fill="none" className=" w-1/2 h-1/2  text-gray-200 animate-spin  fill-blue-600" aria-hidden="true" viewBox="0 0 100 101"><path fill="currentColor" d="M100 50.6a50 50 0 1 1-100 0 50 50 0 0 1 100 0Zm-91 0a41 41 0 1 0 82 0 41 41 0 0 0-82 0Z" /><path fill="currentFill" d="M94 39a4.2 4.2 0 0 0 3-5.4A50 50 0 0 0 41.7 1.3c-2.4.4-3.9 2.9-3.2 5.3a5 5 0 0 0 5.6 3.5A41 41 0 0 1 88 36 5 5 0 0 0 94 39Z" /></svg>

            <span className="sr-only">Loading...</span>
        </div>
    )
}