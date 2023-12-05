import Card from '@/components/Card/Card';
import EmailMask from '@/components/EmailMask/EmailMask';
import FadeIn from '@/components/FadeIn/FadeIn';
import Heading from '@/components/Heading/Heading';
import Icon from '@/components/Icon/Icon';
import Image from '@/components/Image/Image';
import { navbarLinks } from '@/components/Navbar/navbarUtils';
import Section from '@/components/Section/Section';
import profileHome from '@/public/profile-home.png';
import profileTenerife from '@/public/profile-tenerife.jpg';
import Link from 'next/link';
import { BsFillLaptopFill } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { TfiGithub, TfiLinkedin } from 'react-icons/tfi';

export default function HomePage() {
  return (
    <>
      <FadeIn>
        <Section className="lg:flex-row">
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
                target="_blank"
                className="border border-black rounded-full p-4 mr-2 hover:bg-black hover:text-white transition-colors inline-block text-center min-w-[140px]"
              >
                Preview CV
              </Link>
              <Link
                href={navbarLinks.contactMe.href}
                className="border border-black text-white bg-black p-4 rounded-full inline-block text-center min-w-[140px]"
              >
                Contact Info
              </Link>
            </div>

            <div className="flex">
              <Link
                href="https://linkedin.com/in/tomasz-chybziński/"
                target="_blank"
                aria-label="linkedin icon"
              >
                <TfiLinkedin className="w-10 h-10 mr-5" />
              </Link>
              <Link
                href="https://github.com/devTomek/"
                target="_blank"
                aria-label="github icon"
              >
                <TfiGithub className="w-10 h-10 mt-1" />
              </Link>
            </div>
          </div>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section>
          <Heading as="h2" className="mb-5" id={navbarLinks.aboutMe.id}>
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
                <Card className="mb-10 lg:mb-0 lg:mr-10 lg:w-full">
                  <Icon as={BsFillLaptopFill} />
                  <Heading as="h3">Experience</Heading>
                  <p className="whitespace-nowrap">6+ years</p>
                  <p className="whitespace-nowrap">Frontend Developer</p>
                </Card>

                <Card className="lg:w-full">
                  <Icon as={FaUniversity} />
                  <Heading as="h3">Education</Heading>
                  <p className="whitespace-nowrap">MSc Computer Science</p>
                  <p className="whitespace-nowrap">BE Computer Science</p>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section>
          <Heading as="h2" className="mb-5" id={navbarLinks.techStack.id}>
            Tech Stack
          </Heading>

          <ul className="lg:grid lg:grid-cols-3 lg:gap-5">
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              React
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              NextJS
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              Typescript
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              Javascript
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              React Context
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              Redux
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              SCSS
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              Styled Components
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              SCRUM
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              REST
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              GraphQL
            </li>
            <li className="flex items-center font-bold">
              <Icon as={IoCheckmarkOutline} className="mr-2" />
              React Testing Library
            </li>
          </ul>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section>
          <Heading as="h2" className="mb-5" id={navbarLinks.contactMe.id}>
            Contact Me
          </Heading>

          <div className="flex flex-col lg:flex-row">
            <Link
              href="mailto:tomasz.chybzinski@gmail.com"
              className="block mb-5 lg:mr-5"
            >
              <Card resetFlex className="flex justify-center">
                <Icon as={IoMdMail} className="mr-2" />
                <Heading as="h3">
                  <EmailMask email="tomasz.chybzinski@gmail.com" maskDomain />
                </Heading>
              </Card>
            </Link>

            <Link
              href="https://linkedin.com/in/tomasz-chybziński/"
              className="block"
              target="_blank"
            >
              <Card resetFlex className="flex justify-center">
                <Icon as={IoLogoLinkedin} className="mr-2" />
                <Heading as="h3">LinkedIn</Heading>
              </Card>
            </Link>
          </div>
        </Section>
      </FadeIn>
    </>
  );
}
