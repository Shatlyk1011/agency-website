'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const BookFormScheme = z.object({
  service: z.enum(['one', 'two', 'three', 'four', 'five'], {
    required_error: 'choose service type',
  }),
  budget: z.enum(['10-20', '20-30', '30-50', '50+'], {
    invalid_type_error: 'choose your budget',
  }),
  pages: z.enum(['<5', '6-10', '11-20', '20+'], {
    invalid_type_error: 'choose approximate total page',
  }),
  quickness: z.enum(['as fast', 'high prio', 'regular', 'arkayyn'], {
    invalid_type_error: 'choose how quickly',
  }),

  name: z.string().min(2, {
    message: 'Choose first name',
  }),
  phone: z.string().min(2, {
    message: 'phone name',
  }),
  company: z.string().min(2, {
    message: 'phone name',
  }),
  message: z.string().min(2, {
    message: 'additional message required',
  }),
});

export const useBookFormScheme = () => {
  const form = useForm<z.infer<typeof BookFormScheme>>({
    resolver: zodResolver(BookFormScheme),
  });

  function onSubmit(values: z.infer<typeof BookFormScheme>) {
    console.log('hehe', values);
  }

  return { form, onSubmit };
};
