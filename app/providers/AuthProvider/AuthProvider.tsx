import React, { FC } from 'react';
import { TypeComponentAuthFields } from 'types/auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
  ssr: false,
});

export const AuthProvider: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const { data, status } = useSession();

  if (status == 'loading') return null;
  return !isOnlyUser ? (
    <>{children} </>
  ) : (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  );
};
