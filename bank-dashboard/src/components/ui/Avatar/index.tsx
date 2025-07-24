'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

const AvatarWrapper = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root
    data-slot="avatar"
    className={cn(
      'relative flex size-8 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    {...props}
  />
);

const AvatarImage = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image
    data-slot="avatar-image"
    className={cn('aspect-square size-full', className)}
    {...props}
  />
);

const AvatarFallback = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    className={cn(
      'bg-muted flex size-full items-center justify-center rounded-full',
      className,
    )}
    {...props}
  />
);

interface AvatarProps extends ComponentProps<typeof AvatarPrimitive.Image> {
  contentFallback?: string;
  extraStyle?: string;
}

const Avatar = ({
  src,
  contentFallback,
  extraStyle,
  ...props
}: AvatarProps) => (
  <AvatarWrapper className={extraStyle}>
    <AvatarImage src={src} {...props} />
    <AvatarFallback>{contentFallback}</AvatarFallback>
  </AvatarWrapper>
);

export { AvatarWrapper, AvatarImage, AvatarFallback, Avatar };
