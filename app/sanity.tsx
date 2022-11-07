import { ClientConfig, createPreviewSubscriptionHook } from 'next-sanity';
import createClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { PortableText as PortableTextComponent } from '@portabletext/react';

const config = {
  projectId: 'dp2d5yzk',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
};

export const sanityClient = createClient(config);

export const usePreviewSubscribtion = createPreviewSubscriptionHook(config);
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
export const PortableText = (props: any) => (
  <PortableTextComponent components={{}} {...props} />
);
