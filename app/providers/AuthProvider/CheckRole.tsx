import React, { FC } from 'react';
import { TypeComponentAuthFields } from 'types/auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const CheckRole: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const { data } = useSession();

  const { push, replace, pathname } = useRouter();

  const Children = () => <>{children}</>;

  if (data) return <Children />;

  if (isOnlyUser) {
    pathname !== '/auth' && replace('/auth');
    return null;
  }
};
export default CheckRole;
