import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <UnstyledLink href='/' className='mt-4'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width='300'
                height='150'
                src='/images/lmc-hi-res-logo.jpg'
                alt='Deploy with Vercel'
              />
            </UnstyledLink>

            {/* <h1 className='mt-4'>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p> */}

            {/* <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink> */}

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By Limitless Mod Co.
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
