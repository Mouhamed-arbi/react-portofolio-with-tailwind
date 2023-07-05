"use client";
import Image from "next/image";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "../public/arbi.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import tools from "../public/tools.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import React, { useState } from "react";
import { Howl } from "howler";
import tickSoundFile from "../public/tick.mp3";
import iconss from "./icons.css";
import Certification from "./Certifications.js";
import Contact from "./Contact.js";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const tickSound = new Howl({ src: tickSoundFile });

  const playTickSound = () => {
    tickSound.play();
  };
  const openMedium = () => {
    window.open("https://medium.com/@mehdissem", "_blank");
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <head>
        <title>Arbi Portofolio</title>
      </head>

      <main className="bg-gray px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <div
              className="sound-div text-xl font-burtons"
              onClick={() => setSnackbar(true)}
            >
              <p>devoloped by Med Arbi Moussi</p>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1390Ol8pmFJndUGq8YLgyV1uUyf09g4uN/view?usp=drive_link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Mouhamed Arbi Moussi
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Full-Stack JavaScript Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              {" "}
              Freelancer providing services for pragramming
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/mouhamed-arbi-moussi-8944bb24b/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Mouhamed-arbi">
              <AiFillGithub />
            </a>
          </div> */}
          <div id='home' className='w-full h-screen text-center'>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-0 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-teal-500'> Med Arbi Moussi</span>           <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>

          </h1>
        
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/mouhamed-arbi-moussi-8944bb24b/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Mouhamed-arbi">
              <AiFillGithub />
            </a>
          </div>
          
        </div>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        
      </div>
    </div>
          
         
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-500">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a <span className="">Full Stack web developer </span>, I
              possess a strong commitment to excellence, a collaborative
              mindset, and effective communication skills. Drawing upon two
              years of experience as a <span className=""> lieutenant </span> in
              the Tunisian Ministry of National Defense, I bring a unique blend
              of technical expertise and leadership skills to the table with a
              strong commitment to excellence, a collaborative mindset, and
              effective communication skills, I have honed a versatile set of
              technical and non-technical skills.{" "}
              <span className="">
                I am now seeking new opportunities in the IT field to further
                enhance my technical abilities and contribute to innovative
                projects.
              </span>
              <p>
                <div>
                  <h3 className="text-3xl py-1 text-teal-500">
                    Certifications
                  </h3>

                  <div className="sound-div" onClick={() => setSnackbar(true)}>
                    <p>(Click on the certification to show credential)</p>
                  </div>

                  <Certification style="background-color: transparent d-flex fill-height justify-center align-center" />
                </div>
              </p>
            </p>
          </div>

          <div>
            <h2 id="title" className="text-3xl py-1 text-teal-500">
              My tools
            </h2>
            <div className="sound-div" onClick={() => setSnackbar(true)}>
              <p>(Click me then hover over the icons</p>
              <p>for a nice sound)</p>
            </div>
          </div>
<section>
          <div id="skills" >
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
              <h2 className="py-4">What I Can Do</h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                  
                <div >
                  <p className="tools-names">Languages</p>
                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <div title="TypeScript">
                          <img
                            className="languages-icons"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                            onMouseEnter={playTickSound}
                            width="64px"
                            height="64px"
                            alt="/"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>TypeScript</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <div title="JavaScript">
                          <img
                            className="languages-icons"
                            data-name="JavaScript"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                            alt="JavaScript"
                            onMouseEnter={playTickSound}
                            width="64px"
                            height="64px"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>JavaScript</h3>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div >
                  <p>Front-end</p>
              
                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <div title="CSS">
                          <img
                            className="languages-icons"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                            onMouseEnter={playTickSound}
                            width="64px"
                            height="64px"
                            alt="/"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>CSS</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <div title="HTML">
                          <img
                            className="languages-icons"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425"
                            onMouseEnter={playTickSound}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>HTML</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                      <div title="ReactNative">
                      <img
                        className="languages-icons"
                        src="https://res.cloudinary.com/dlnvacfsc/image/upload/v1680291873/samples/pngwing.com_7_nfeg4f.png"
                        onMouseEnter={playTickSound}
                        width="64px"
                            height="64px"
                            alt="/"
                      />
                    </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>ReactNative</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <div title="React">
                          <img
                            className="languages-icons"
                            src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                            onMouseEnter={playTickSound}
                            width="64px"
                            height="64px"
                            alt="/"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>React</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                      <div title="NextJS">
                      <img
                        className="languages-icons"
                        src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg"
                        onMouseEnter={playTickSound}
                        width="64px"
                            height="64px"
                            alt="/"
                      />
                    </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>NextJS</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                      <div title="Vue">
                      <img
                        className="languages-icons"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                        onMouseEnter={playTickSound}
                        width="64px"
                            height="64px"
                            alt="/"
                      />
                    </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Vue</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <div title="Tailwind">
                          <img
                            className="languages-icons"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                            onMouseEnter={playTickSound}
                            width="64px"
                            height="64px"
                            alt="/"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Tailwind</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                      <div title="Expo">
                      <img
                        className="languages-icons"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRS42xTcnXMlC85s502uVAhzdGqq_23-bXA&usqp=CAU"
                        onMouseEnter={playTickSound}
                        width="64px"
                            height="64px"
                            alt="/"
                      />
                    </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Expo</h3>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div>
                  <h3 className="tools-names">Back-end</h3>

                  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                     <div title="NodeJS">
                      <img
                        className="languages-icons"
                        src="https://res.cloudinary.com/dlnvacfsc/image/upload/v1680284101/samples/pngwing.com_5_rjnbjf.png"
                        onMouseEnter={playTickSound}
                        width="64px"
                            height="64px"
                            alt="/"
                      />
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3>NodeJS</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                    <div title="Express">
                      <img
                        className="languages-icons"
                        src="https://res.cloudinary.com/dlnvacfsc/image/upload/v1680294186/pngwing.com_9_l9ry0z.png"
                        onMouseEnter={playTickSound}
                        width="64px"
                            height="64px"
                            alt="/"
                      />
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3>Express</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                    <div title="Prisma">
                      <img
                        className="languages-icons"
                        src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png"
                        onMouseEnter={playTickSound}
                        width="64px"
                            height="64px"
                            alt="/"
                      />
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3>Prisma</h3>
                    </div>
                  </div>
                </div>
                </div>
                <div>
                  <h3 className="tools-names">Databases</h3>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <div title="FireBase">
                        <img
                          className="languages-icons"
                          src="https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png?f=webp&w=256"
                          onMouseEnter={playTickSound}
                          width="64px"
                          height="64px"
                          alt="/"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3>Firebase</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                    <div title="MongoDB">
                      <img
                        className="languages-icons"
                        src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
                        onMouseEnter={playTickSound}
                        width="64px"
                        height="64px"
                        alt="/"
                      />
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3>MongoDB</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <div title="MySQL">
                        <img
                          className="languages-icons"
                          src="https://www.dcorba.com/wp-content/uploads/2017/11/mysql-logo.png"
                          onMouseEnter={playTickSound}
                          width="64px"
                          height="64px"
                          alt="/"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3>MySQL</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <div title="PostgreSQL">
                        <img
                          className="languages-icons"
                          src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
                          onMouseEnter={playTickSound}
                          width="64px"
                          height="64px"
                          alt="/"
                        />
                      </div>{" "}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3>PostgreSQL</h3>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        </section>
        <section>
          {/* {snackbar && (
            <div>
              yay :D
              <button onClick={() => setSnackbar(false)}>Close</button>
            </div>
          )} */}
          <div className="articles" style={{ textAlign: "center" }}>
            <h3 className="article-header text-3xl py-1 text-teal-500">
              My Articles on{" "}
              <span onClick={openMedium} className="medium-link">
                Medium
              </span>
            </h3>
            <div className="sound-div" onClick={() => setSnackbar(true)}>
              <p>(click on the title to go to my Medium profile)</p>
            </div>
            {/* <p className="notice">(click on the title to go to my Medium profile)</p> */}
            <iframe
              src="https://widgets.sociablekit.com/medium-publication-feed/iframe/160883"
              //https://widgets.sociablekit.com/medium-publication-feed/iframe/160883
              frameBorder="0"
              width="85%"
              height="500"
              style={{
                border: "10cap",
                margin: "10px auto",
                display: "relative",
              }}
            ></iframe>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-teal-500">
              Portofolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        <section>
          <Contact/>
        </section>
      </main>
    </div>
  );
}
