import { useRouter } from 'next/router';
import React from 'react';
import styles from './Footer.module.scss';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

type TypeNavItem = {
  icon: string;
  link: string;
};

const navItems: TypeNavItem[] = [
  {
    icon: 'home',
    link: '/',
  },
  {
    icon: 'favorite_outline',
    link: '/favorites',
  },
  {
    icon: 'account_circle',
    link: '/profile',
  },
  {
    icon: 'logout',
    link: '/auth',
  },
];

const Footer = () => {
  const { push, asPath, pathname } = useRouter();

  const { data, status } = useSession();
  return (
    <footer className={styles.footer}>
      <nav>
        {data ? (
          navItems.map(item => (
            <button
              className={pathname === item.link ? styles.active : ''}
              key={item.icon}
              onClick={() => {
                if (item.link == '/auth' && data) signOut();
                else push(item.link);
              }}
            >
              <span className='material-icons-outlined'>{item.icon}</span>
            </button>
          ))
        ) : (
          <Link href={'/auth'}>
            <a className={styles.goToLogin}>Go To Login</a>
          </Link>
        )}
      </nav>
    </footer>
  );
};

export default Footer;
