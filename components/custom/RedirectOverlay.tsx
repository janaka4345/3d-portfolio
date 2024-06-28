import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import Link from 'next/link';

export default function RedirectOverlay({ open, githubUrl, websiteUrl, handleClose }: { open: boolean, githubUrl: string, websiteUrl: string, handleClose: (type: string) => void }) {


    return (
        <Dialog open={open} onOpenChange={() => { handleClose('out') }} >

            <DialogContent className="sm:max-w-[425px] z-50" onClick={(e) => { e.stopPropagation() }} >

                <div className='flex flex-col mt-4 gap-4'>
                    <Link target="_blank" href={githubUrl}>Github page</Link>
                    <Link target="_blank" href={websiteUrl}>Live Website</Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}
