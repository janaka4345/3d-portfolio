
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
            <DialogContent className=" max-w-[80dvw] sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Leave a Message</DialogTitle>
                    <DialogDescription>
                        I will get back to you ASAP!!
                    </DialogDescription>
                </DialogHeader>

                <MessageForm />
            </DialogContent>
        </Dialog>
    )
}
export default Message
