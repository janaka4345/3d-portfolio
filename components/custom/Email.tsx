import { Button } from "../ui/button"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from "sonner"


const emailAddress = 'janakchamantha12@gmail.com'
const Email = () => {
    const handleCopy = (_: string, result: boolean) => {
        if (result) {
            toast.success("Email address has been copied successfully.")

        }
        if (!result) {
            toast.error('Email address count be copied.', {
                description: `Email:${emailAddress}`,
            })

        }
    }
    return (
        <CopyToClipboard text={emailAddress}
            onCopy={handleCopy}>
            <Button variant="customLink" size="none"
            >
                Email Me
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Button>
        </CopyToClipboard>

    )
}
export default Email
