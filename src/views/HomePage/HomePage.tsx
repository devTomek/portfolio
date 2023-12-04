import Image from 'next/image';
import profileT from '@/public/profile-tenerife.jpg';
import { TfiLinkedin } from 'react-icons/tfi';
import { TfiGithub } from 'react-icons/tfi';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-center my-24 lg:my-48">
        <Image
          alt="face rounded image"
          src={profileT}
          width={200}
          height={200}
          sizes={`(max-width: 1024px) 50vw, 30vw`}
          className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full object-cover mb-10 lg:mb-0 lg:mr-20"
          priority
          style={{
            objectPosition: '0 -20px',
          }}
        />

        <div className="flex flex-col items-center">
          <p className="text-gray-800 mb-1">Hello, I&apos;m</p>
          <p className="text-3xl font-bold mb-1">Tomasz Chybziński</p>
          <h1 className="font-bold text-gray-800 mb-5">Frontend Developer</h1>

          <div className="mb-5">
            <Link
              href="CV.pdf"
              className="border border-black rounded-full p-4 mr-2 hover:bg-black hover:text-white transition-colors inline-block text-center min-w-[140px]"
            >
              Preview CV
            </Link>
            <button className="border border-black text-white bg-black p-4 rounded-full min-w-[140px]">
              Contact Info
            </button>
          </div>

          <div className="flex">
            <Link
              href="https://linkedin.com/in/tomasz-chybziński/"
              target="_blank"
            >
              <TfiLinkedin className="w-10 h-10 mr-5" />
            </Link>
            <Link href="https://github.com/devTomek/" target="_blank">
              <TfiGithub className="w-10 h-10 mt-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
