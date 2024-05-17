'use client';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import{ Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form";
import { TodoFormValues, todoFormSchema } from "@/schema";
import { createTodoAction } from "@/actions/todo.action";
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import { Spinner } from "./Spinner";


const AddTodoForm = () => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
    
  const defaultValues: Partial<TodoFormValues> = {
    title: "",
    body: "",
    completed: false,
  }
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const onSubmit =async (data: TodoFormValues) => {
    setLoading(true);
    const {title, body, completed} = data
    await createTodoAction({title, body, completed})
    setLoading(false);
    setOpen(false);
  }
  return (
    
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="ml-auto">
        <Button>
        <Plus size={14} className="mr-1"/>
             New Todo
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>Add New Todo</DialogTitle>
        </DialogHeader>
        <div className="py-4">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                        <Input placeholder="GO to gym" {...field} />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />
        
                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="Tell us a little bit about yourself"
                            className="resize-none"
                            {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            You can write a short description about next todo 
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                     <FormField
                        control={form.control}
                        name="completed"
                        render={({ field }) => (
                        <FormItem>
                           <div className="flex items-center space-x-2">
                                <FormControl >
                                    <Checkbox  checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormLabel>Completed</FormLabel>
                           </div>
                            <FormDescription>
                                Your to-do item will be UnCompleted by default unless you checked it.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                 />
                
                     <Button type="submit">
                        {loading ? (
                            <>
                                <Spinner/> Saving
                            </>
                        ):(
                            "Save"
                        )}
                     </Button>
                </form>
                </Form>
        </div>
        </DialogContent>
        </Dialog>
  )
}

export default AddTodoForm