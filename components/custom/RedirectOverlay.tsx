import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog"

export default function RedirectOverlay({ open, githubUrl, websiteUrl, handleClose }: { open: boolean, githubUrl: string, websiteUrl: string, handleClose: (type: string) => void }) {


    const handleClick = () => {

        window.open('https://google.com/', '_blank', 'noopener,noreferrer');
    };

    return (
        <Dialog open={open} onOpenChange={() => { handleClose('out') }} >

            <DialogContent className="sm:max-w-[425px] z-50" onClick={(e) => { e.stopPropagation() }} >

                <div className='flex flex-col mt-4 gap-4'>
                    <Button onClick={handleClick}>Github page</Button>
                    <Button onClick={handleClick}>Live Website</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
