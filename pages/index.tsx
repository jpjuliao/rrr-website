import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ImageUrl from '@/public/paper-texture.svg';

export default function Home() {

  return (
    <>
      <Head>
        <title>Bienvenido a RRR - Reciclaje y Recogidas de Residuos de Construcción</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundImage: `url(${ImageUrl.src})` }}>
        <div className='flex flex-col h-screen justify-between relative' style={{ backgroundColor: 'rgb(235 228 212)', opacity: .9 }}>
          <Header />
          <main className="container m-auto p-4">
            <section className='text-center'>
              <h1>NOS ENCARGAMOS DEL TRABAJO SUCIO</h1>
              <p>Tenemos todo lo que necesita para deshacerse fácilmente de sus residuos. Ofrecemos un servicio fiable de reciclaje y recogida de residuos a domicilio. Simplemente programe en nuestro sitio web hoy</p>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
