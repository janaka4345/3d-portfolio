import { buttonVariants } from "../ui/button"

const Message = () => {
    return (
        <a
            href="#"
            className={buttonVariants({
                variant: "cta",
                size: "none",
            })}
        >
            Leave a Message
        </a>
    )
}
export default Message
