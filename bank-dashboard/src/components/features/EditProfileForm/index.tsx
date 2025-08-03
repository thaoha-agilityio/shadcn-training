'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

// Components
import { Input } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { FormField, Form } from '@/components/ui/form';
import { DatePicker } from '@/components/common/DatePicker';
import { AvatarUpload } from '../AvatarUpload';

// Constants
import { FORM_VALIDATION_MESSAGE } from '@/constants';

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
});

export const EditProfileForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
    },
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
  return (
    <div>
      <Form {...form}>
        <form className="flex gap-[55px]" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AvatarUpload />
          </div>

          <div className="flex gap-7 flex-1">
            <div className="flex flex-col gap-5 w-full">
              <FormField
                control={control}
                name="firstName"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    placeholder="First Name"
                    label="First Name"
                    errorMessage={error?.message}
                    onChange={onChange}
                  />
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Email"
                    errorMessage={error?.message}
                    onChange={onChange}
                  />
                )}
              />

              <DatePicker
                value={undefined}
                onSelect={(value) => console.log(value)}
              />

              <FormField
                control={control}
                name="permanentAddress"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Permanent Address"
                    placeholder="Address"
                    errorMessage={error?.message}
                    onChange={onChange}
                  />
                )}
              />

              <FormField
                control={control}
                name="postalCode"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Postal Code"
                    placeholder="Postal Code"
                    errorMessage={error?.message}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-5 w-full">
              <FormField
                control={control}
                name="lastName"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Last Name"
                    placeholder="Last Name"
                    errorMessage={error?.message}
                    onChange={onChange}
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
                  <Input
                    {...rest}
                    label="Password"
                    placeholder="Password"
                    errorMessage={error?.message}
                    onChange={onChange}
                  />
                )}
              />
              <FormField
                control={control}
                name="presentAddress"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Present Address"
                    placeholder="Present Address"
                    errorMessage={error?.message}
                    onChange={onChange}
                  />
                )}
              />
              <FormField
                control={control}
                name="city"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="City"
                    placeholder="City"
                    errorMessage={error?.message}
                    onChange={onChange}
                  />
                )}
              />
              <FormField
                control={control}
                name="country"
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => (
                  <Input
                    {...rest}
                    label="Country"
                    placeholder="Country"
                    errorMessage={error?.message}
                    onChange={onChange}
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
