'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

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

// Services
import { UserInfo, UserPayload } from '@/types';

// Services
import { updateUser, uploadImageToImgbb } from '@/services';

const formSchema = z.object({
  firstName: z
    .string()
    .nonempty(FORM_VALIDATION_MESSAGE.REQUIRED('First Name')),
  lastName: z.string().nonempty(FORM_VALIDATION_MESSAGE.REQUIRED('Last Name')),
  permanentAddress: z.string(),
  postalCode: z.string(),
  presentAddress: z.string(),
  city: z.string(),
  country: z.string(),
  dateOfBirth: z
    .date()
    .refine((date) => date <= new Date() && date >= new Date('1900-01-01')),
  avatar: z.string().optional(),
});

interface EditProfileFormProps {
  user?: UserInfo;
  token?: string;
}

export const EditProfileForm = ({ user, token = '' }: EditProfileFormProps) => {
  const {
    id = '',
    email = '',
    firstName = '',
    lastName = '',
    avatar = '',
    dateOfBirth = '',
    permanentAddress = '',
    postalCode = '',
    presentAddress = '',
    city = '',
    country = '',
  } = user || {};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      firstName,
      lastName,
      permanentAddress,
      postalCode,
      presentAddress,
      city,
      country,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
      avatar,
    },
  });

  const {
    formState: { errors },
    clearErrors,
    handleSubmit,
    control,
  } = form;

  const [isPending, setIsPending] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsPending(true);
    const { avatar, dateOfBirth } = data;
    let uploadedAvatarUrl = avatar;

    if (avatarFile) {
      const { image, error } = await uploadImageToImgbb(avatarFile);
      if (image) {
        uploadedAvatarUrl = image;
      } else {
        toast.error('Failed to upload avatar', { description: error || '' });
        setIsPending(false);
        return;
      }
    }

    const payload = {
      ...data,
      avatar: uploadedAvatarUrl,
      dateOfBirth: dateOfBirth?.toString() || '',
    } as UserPayload;

    const { error } = await updateUser(token, id, payload);

    if (error) {
      toast.error('Edit user failed', { description: error });
      setIsPending(false);
      return;
    }

    setIsPending(false);
    toast.success('Edit user success');
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
              render={({ field: { value } }) => (
                <AvatarUpload
                  src={value || ''}
                  onChange={(file) => {
                    setAvatarFile(file); // Store file to upload later
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

              <Input label="Email" defaultValue={email} disabled={!!email} />

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

              <Input
                label="Password"
                placeholder="Password"
                defaultValue="********"
                disabled={!!email}
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
                <Button
                  type="submit"
                  className="w-[190px] h-[50px]"
                  isLoading={isPending}
                  disabled={isPending}
                >
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
