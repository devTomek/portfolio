import profileTenerife from '@/public/profile-tenerife.jpg';
import profileHome from '@/public/profile-home.png';
import { TfiLinkedin } from 'react-icons/tfi';
import { TfiGithub } from 'react-icons/tfi';
import Link from 'next/link';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import Card from '@/components/Card/Card';
import { BsFillLaptopFill } from 'react-icons/bs';
import Icon from '@/components/Icon/Icon';
import { FaUniversity } from 'react-icons/fa';
import Image from '@/components/Image/Image';

export default function HomePage() {
  return (
    <>
      <Section>
        <Image
          alt="tenerife profile rounded image"
          src={profileTenerife}
          className="mb-10 lg:mb-0 lg:mr-20"
          priority
        />

        <div className="flex flex-col items-center">
          <p className="text-gray-800 mb-1">Hello, I&apos;m</p>
          <Heading className="mb-1">Tomasz Chybziński</Heading>
          <p className="font-bold text-gray-800 mb-5">Frontend Developer</p>

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
      </Section>

      <Section className="lg:flex-col">
        <Heading as="h2" className="mb-5">
          About Me
        </Heading>

        <div className="flex flex-col lg:flex-row items-center">
          <Image
            alt="home face rounded image"
            src={profileHome}
            className="mb-10 lg:mb-0 lg:mr-20"
          />

          <div className="flex flex-col">
            <div className="lg:flex lg:items-center lg:justify-center mb-5">
              <Card className="mb-10 lg:mb-0 lg:mr-10 lg:w-full min-w-[230px]">
                <Icon as={BsFillLaptopFill} />
                <Heading as="h3" className="text-base lg:text-base">
                  Experience
                </Heading>
                <p className="whitespace-nowrap">6+ years</p>
                <p className="whitespace-nowrap">Frontend Developer</p>
              </Card>

              <Card className="lg:w-full min-w-[230px]">
                <Icon as={FaUniversity} />
                <Heading as="h3" className="text-base lg:text-base">
                  Education
                </Heading>
                <p className="whitespace-nowrap">M.Sc. Masters Degree</p>
                <p className="whitespace-nowrap">B.Sc. Bachelors Degree</p>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
