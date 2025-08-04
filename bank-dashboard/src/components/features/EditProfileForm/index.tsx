'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { ChangeEvent } from 'react';

// Components
import { Input } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { FormField, Form } from '@/components/ui/form';
import { DatePicker } from '@/components/common/DatePicker';
import { AvatarUpload } from '../AvatarUpload';

// Constants
import { FORM_VALIDATION_MESSAGE } from '@/constants';

// Types
import { clearErrorOnChange } from '@/utils';

const formSchema = z.object({
  email: z.string().nonempty(FORM_VALIDATION_MESSAGE.REQUIRED('Email')),
  firstName: z
    .string()
    .nonempty(FORM_VALIDATION_MESSAGE.REQUIRED('First Name')),
  lastName: z.string().nonempty(FORM_VALIDATION_MESSAGE.REQUIRED('Last Name')),
  permanentAddress: z.string(),
  postalCode: z.string(),
  presentAddress: z.string(),
  city: z.string(),
  country: z.string(),
  password: z.string(),
  dateOfBirth: z
    .date()
    .refine((date) => date <= new Date() && date >= new Date('1900-01-01')),
  avatar: z.string().optional(),
});

export const EditProfileForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {},
  });

  const {
    formState: { errors },
    clearErrors,
    handleSubmit,
    control,
  } = form;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const handleInputChange = (
    name: keyof z.infer<typeof formSchema>,
    onChange: (value: string) => void,
  ) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);

      clearErrorOnChange(name, errors, clearErrors);
    };
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col md:flex-row items-center md:items-start gap-[55px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <FormField
              control={control}
              name="avatar"
              render={({ field: { value, onChange, ...rest } }) => (
                <AvatarUpload
                  {...rest}
                  src={value || ''}
                  onChange={(...args) => {
                    onChange(...args);
                    return true; // or return undefined if that's more appropriate
                  }}
                />
              )}
            />
          </div>

          <div className="flex gap-7 flex-col md:flex-row w-full flex-1">
            <div className="flex flex-col gap-5 w-full">
              <FormField
                control={control}
                name="firstName"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    placeholder="First Name"
                    label="First Name"
                    errorMessage={error?.message}
                    onChange={handleInputChange('firstName', onChange)}
                    defaultValue={value}
                  />
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Email"
                    errorMessage={error?.message}
                    defaultValue={value}
                    onChange={handleInputChange('email', onChange)}
                  />
                )}
              />

              <FormField
                control={control}
                name="dateOfBirth"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <DatePicker
                    label="Date of birth"
                    value={value}
                    onSelect={onChange}
                    errorMessage={error?.message}
                    {...rest}
                  />
                )}
              />

              <FormField
                control={control}
                name="permanentAddress"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Permanent Address"
                    placeholder="Address"
                    defaultValue={value}
                    errorMessage={error?.message}
                    onChange={handleInputChange('permanentAddress', onChange)}
                  />
                )}
              />

              <FormField
                control={control}
                name="postalCode"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Postal Code"
                    placeholder="Postal Code"
                    errorMessage={error?.message}
                    defaultValue={value}
                    onChange={handleInputChange('postalCode', onChange)}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-5 w-full">
              <FormField
                control={control}
                name="lastName"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Last Name"
                    placeholder="Last Name"
                    errorMessage={error?.message}
                    defaultValue={value}
                    onChange={handleInputChange('lastName', onChange)}
                  />
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Password"
                    placeholder="Password"
                    errorMessage={error?.message}
                    defaultValue={value}
                    onChange={handleInputChange('password', onChange)}
                  />
                )}
              />
              <FormField
                control={control}
                name="presentAddress"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Present Address"
                    placeholder="Present Address"
                    errorMessage={error?.message}
                    defaultValue={value}
                    onChange={handleInputChange('presentAddress', onChange)}
                  />
                )}
              />
              <FormField
                control={control}
                name="city"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="City"
                    placeholder="City"
                    errorMessage={error?.message}
                    defaultValue={value}
                    onChange={handleInputChange('city', onChange)}
                  />
                )}
              />
              <FormField
                control={control}
                name="country"
                render={({
                  field: { onChange, value, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Country"
                    placeholder="Country"
                    errorMessage={error?.message}
                    defaultValue={value}
                    onChange={handleInputChange('country', onChange)}
                  />
                )}
              />

              <div className="flex justify-end mt-3">
                <Button type="submit" className="w-[190px] h-[50px]">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
