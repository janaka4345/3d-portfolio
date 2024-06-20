import { formSchema } from "@/lib/formSchema"
import { transporter } from "@/lib/nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    const validatedData = formSchema.safeParse(data)

    if (!validatedData.success) {
        return NextResponse.json(
            { error: "Invalid Data Entered" },
            { status: 400 }
        )
    }
    const { name, email, message } = validatedData.data

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USERNAME,
            to: process.env.GMAIL_USERNAME,
            subject: "Message from 3d-Portfolio ",
            text: "test string",
            html: `<h1>${name}</h1> </br> <h1>${email}</h1> </br><h1>${message}</h1> </br>`,
        })
        return NextResponse.json(
            { success: "Message sent Successfully" },
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Message wasn't send" },
            { status: 400 }
        )
    }
}
