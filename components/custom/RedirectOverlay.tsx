import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { buttonVariants } from "../ui/button";

export default function RedirectOverlay({ open, githubUrl, websiteUrl, handleClose }: { open: boolean, githubUrl: string, websiteUrl: string, handleClose: (type: string) => void }) {


    return (
        <Dialog open={open} onOpenChange={() => { handleClose('out') }} >

            <DialogContent className="sm:max-w-[425px] z-50" onClick={(e) => { e.stopPropagation() }} >

                <div className='flex flex-col mt-4 gap-4'>
                    <Link className={cn(buttonVariants({ variant: 'default' }))} target="_blank" href={githubUrl}>Github page</Link>
                    <Link className={cn(buttonVariants({ variant: 'default' }))} target="_blank" href={websiteUrl}>Live Website</Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}
