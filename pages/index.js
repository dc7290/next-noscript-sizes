import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Issue - sizes defined in props is not applied to noscript in
          next/image
        </title>
      </Head>

      <main>
        <Image
          src='/img.png'
          width={1920}
          height={1280}
          size='(min-width: 768px) 100px, 85vw'
          alt=''
        />
        <Image src='/img.png' width={1920} height={1280} size='100vw' alt='' />
      </main>
    </div>
  );
}
