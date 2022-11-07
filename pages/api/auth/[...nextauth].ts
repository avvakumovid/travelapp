import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanityClient } from '../../../app/sanity';

const options: NextAuthOptions = {
    providers: [

        GitHub({
            //@ts-ignore
            clientId: process.env.GITHUB_CLIENT_ID,
            //@ts-ignore
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        //@ts-ignore
        SanityCredentials(sanityClient)
    ],
    session: {
        strategy: 'jwt'
    },
    secret: 'any-secret-word',
    //@ts-ignore
    adapter: SanityAdapter(sanityClient)
};

export default NextAuth(options);