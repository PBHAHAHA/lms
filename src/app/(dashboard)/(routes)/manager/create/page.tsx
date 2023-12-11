"use client"

import * as z from 'zod'
import axios from 'axios'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/router'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
    title: z.string().min(3, {
        message: "请填入标题"
    }),
    // content: z.string().min(3).max(1000).required(),
})
const CreatePage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })
    const { isSubmitting, isValid } = form.formState
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return ( 
        <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
            <div>
                {/* <h1 className='text-2xl'>
                    文章的创建
                </h1> */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mt-8'>
                        
                        <FormField
                            control={form.control}
                            name='title'
                            render={
                                ({field}) => (
                                    <FormItem >
                                        <FormLabel className=''>
                                            文章名称
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                disabled={isSubmitting}
                                                placeholder='请输入'
                                                // onChange={}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }
                        ></FormField>
                        <FormField
                            control={form.control}
                            name='title'
                            render={
                                ({field}) => (
                                    <FormItem >
                                        <FormLabel className=''>
                                            文章名称
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                disabled={isSubmitting}
                                                placeholder='请输入'
                                                // onChange={}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }
                        ></FormField>
                        <div className='flex items-center gap-x-2'>
                            <Link href="/">
                                <Button type='button' variant="ghost">取消</Button>
                            </Link>
                            <Button type='submit' disabled={isValid}>提交</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
     );
}
 
export default CreatePage;