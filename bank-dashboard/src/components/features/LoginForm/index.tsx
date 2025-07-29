'use client';

import { Button } from '../../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { z } from 'zod';

// Components
import { Input } from '@/components/ui';
import { Form, FormField } from '@/components/ui/form';
import { PasswordInput } from '@/components/ui/PasswordInput';

// Constants
import { FORM_VALIDATION_MESSAGE } from '@/constants';

// Utils
import { clearErrorOnChange } from '@/utils';

const formSchema = z.object({
  email: z
    .string()
    .nonempty(FORM_VALIDATION_MESSAGE.REQUIRED('Email'))
    .email(FORM_VALIDATION_MESSAGE.INVALID('Email')),

  password: z
    .string()
    .nonempty(FORM_VALIDATION_MESSAGE.REQUIRED('Password'))
    .min(8, FORM_VALIDATION_MESSAGE.MIN_LENGTH('Password', 8)),
});

type LoginPayload = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { errors },
    clearErrors,
    handleSubmit,
    control,
  } = form;

  const handleInputChange = (
    name: keyof LoginPayload,
    onChange: (value: string) => void,
  ) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);

      clearErrorOnChange(name, errors, clearErrors);
    };
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="border p-6 rounded-2xl">
      <h2 className="text-center text-md font-medium">Login</h2>
      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="email"
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => (
              <Input
                {...rest}
                placeholder="Email address"
                label="Email"
                errorMessage={error?.message}
                onChange={handleInputChange('email', onChange)}
              />
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => (
              <PasswordInput
                {...rest}
                placeholder="Password"
                errorMessage={error?.message}
                onChange={handleInputChange('password', onChange)}
              />
            )}
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};
