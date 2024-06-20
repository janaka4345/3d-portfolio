"use client"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { formSchema } from "@/lib/formSchema"
import { toast } from "sonner"



const MessageForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/contactForm', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
            })
            const data = await response.json()
            if (data.success) {
                toast.success(data.success,)
                form.reset()
            }
            if (data.error) {
                toast.error(data.error)
            }

        } catch (error) {
            console.log(error);
            if (error) {
                toast.error('Something Went Wrong')
            }

        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" max-w-[60dvw] space-y-8 sm:max-w-[500px]">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name:</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email:</FormLabel>
                            <FormControl>
                                <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message:</FormLabel>
                            <FormControl>
                                <textarea placeholder="Your message" rows={4} className="w-full"  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>Send Message</Button>
            </form>
        </Form>
    )
}
export default MessageForm