import Head from 'next/head';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from './../constans';
import { onlyText } from './clearText';

interface IMeta {
  title: string;
  description?: string;
  image?: string;
}

const Meta: FC<IMeta> = ({ title, description, image }) => {
  const { asPath } = useRouter();
  const currentUrl = `${API_URL}${asPath}`;

  return (
    <Head>
      <title itemProp='headline'>{title} | Travel App</title>
      {description ? (
        <>
          <meta
            itemProp='description'
            name='description'
            content={onlyText(description, 152)}
          />
          <link rel='canonical' href={currentUrl} />
          <meta property='og:locate' content='en' />
          <meta property='og:title' content={title} />
          <meta property='og:url' content={currentUrl} />
          <meta
            property='og:image'
            content={image || '../../assets/images/logo.png'}
          />
          <meta property='og:site_name' content='Travel App' />
          <meta
            property='og:description'
            content={onlyText(description, 197)}
          />
        </>
      ) : (
        <meta name='robots' content='noindex, nofollow' />
      )}
    </Head>
  );
};

export default Meta;
