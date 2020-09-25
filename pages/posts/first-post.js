import Link from 'next/link';
import Head from 'next/head';
import GTM from 'next-gtm';
import HubspotForm from 'react-hubspot-form';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Link
        href="/"
      >
        Home
      </Link>
      <HubspotForm
        portalId='6331207'
        formId='fab07e9b-4867-49f1-97d6-e3f0192701bc'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}
        />
      <div className="test">
        <p>Test</p>
      </div>
      <style jsx>{`
        body{
          background: red;
        }
        a {
          color: red;
        }
        .test{
          background: red;
        }
      `}</style>
      <GTM id="GTM-MRL9KJ7" />
    </>
  )
}
