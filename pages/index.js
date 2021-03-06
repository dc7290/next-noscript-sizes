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
        <Image src='/img.png' width={1920} height={1280} sizes='50vw' alt='' />
        <Image src='/img.png' width={1920} height={1280} sizes='100vw' alt='' />
      </main>
    </div>
  );
}
