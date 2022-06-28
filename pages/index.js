import Head from 'next/head'
import AddNote from './components/Addnote'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Evernote Clone</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container'>
        <div className="row">
          <div className="col-2">
            <AddNote />
          </div>
          <div className="col-10">Right</div>
        </div>
      </main>
    </div>
  )
}