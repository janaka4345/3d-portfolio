
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "../ui/button"


import MessageForm from "./MessageForm"

const Message = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="cta"
                    size="none"
                >
                    Leave a Message
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <MessageForm />
            </DialogContent>
        </Dialog>
    )
}
export default Message
