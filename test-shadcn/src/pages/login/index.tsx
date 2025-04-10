import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LockIcon } from "lucide-react"
import { useForm } from "react-hook-form"

export default function Login() {
    const form = useForm()
    return (
        <Form {...form}>
            <FormField
                control={form.control}
                name="..."
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                                <LockIcon className="h-5 w-5 text-muted-foreground" />
                                <Input placeholder="ID" {...field} className="rounded-sm border-0 focus-visible:ring-0 shadow-none" />
                            </div>
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                    </FormItem>
                )}
            />
        </Form>
    )
}
