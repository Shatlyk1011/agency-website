'use client'
import { FC, useState } from 'react';

import Button from '@/components/ui/Button'
import { INPUT_FIELDS, RADIO_FIELDS } from '@/data';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form/form";
import { useBookFormScheme } from '@/hooks/useBookForm';


interface Props { };

const defaultState = {
  service: null,
  budget: null,
  pages: null,
  quickness: null,

  name: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',

}

const Index: FC<Props> = () => {
  const [formData, setFormData] = useState(defaultState)

  const { form, onSubmit } = useBookFormScheme()

  return (
    <div className="max-w-[70vw] px-[10vw] mx-auto">
        <h1 className='text-center font-bold text-[3.5vw] mb-[1.25vw] leading-[100%]'>hello world</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col items-center">
          <div className='flex flex-wrap'>
            {RADIO_FIELDS.map(item => (
              <FormField
                key={item.title}
                control={form.control}
                name={item.type as any}
                render={({ field }) => (
                  <FormItem className={`inline-block w-[calc(50%-16px)] mb-[1.75vw] ${item.classes}`}>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} >
                        <h4 className='text-[1.3vw] font-semibold mb-[0.2vw] max-w-[80%]'>{item.title}</h4>
                        {item.radioArray.map(radio => (
                          <FormItem key={radio.value} className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value={radio.value} id={radio.name} />
                            </FormControl>
                            <label htmlFor={radio.name} className='text-[1vw] leading-[1.75vw]'>{radio.name}</label>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}



            <Button type='submit' onClick={() => form.handleSubmit(onSubmit)} title='отправить' classes="py-[10px] px-12 text-[1.1vw] bg-bg-1/90 hover:bg-bg-1/80" btnClasses='p-[2px] capitalize self-start !mt-4' />
          </div>
        </form>
      </Form>
    </div>

  )
};
export default Index