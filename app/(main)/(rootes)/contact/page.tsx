"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  return (
    <main className="max-w-[1300px] m-auto px-10">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.4,
          delay: 0.2,
          // ease: [0.25, 0.25, 0.25, 0.75],
        }}
        className="relative w-full h-full  bg-pattern5 bg-center bg-cover rounded-3xl flex items-center justify-start py-32 pb-10 md:h-[40vh] md:pb-0"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>

        <div className="px-10 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.3,
              // ease: [0.25, 0.25, 0.25, 0.75],
            }}
            className="text-3xl text-white font-bold md:text-5xl"
          >
            Contacter nous
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.5,
              // ease: [0.25, 0.25, 0.25, 0.75],
            }}
            className="text-start text-2xl font-bold text-[#fff] mb-2 md:text-3xl"
          >
            Nous sommes là pour répondre à toutes vos questions et vous
            accompagner.
          </motion.h2>

          <div className="inverted-radius"></div>
        </div>
      </motion.section>

      <div className="bg-gradient-to-b  to-blue-700 text-white py-2 px-10 relative z-10">
        {/* Header Section */}

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.8,
            delay: 0.5,
          }}
          className="text-center text-lg mt-4"
        >
          Nous sommes là pour répondre à toutes vos questions et vous
          accompagner.
        </motion.p>

        {/* Contact Info */}
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.8,
              delay: 0.7,
            }}
            className="bg-white text-black rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-700">Adresse</h2>
            <p>
              Boulevard du Cameroun, Ligne 11, Grand marché de Marcory, Abidjan,
              Côte d'Ivoire
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.8,
              delay: 0.9,
            }}
            className="bg-white text-black rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-700">Téléphone</h2>
            <p>+225 0564919216</p>
            <p>+225 0708201212</p>
            <p>+86 186 2097 5453</p>
            <p>+86 188 0207 2454</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.8,
              delay: 1.1,
            }}
            className="bg-white text-black rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-700">Email</h2>
            <p>royalcargo225@gmail.com</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-blue-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            Envoyez-nous un message
          </h3>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Votre Nom"
              className="p-3 rounded-lg border
              text-black
              border-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Votre Email"
              className="p-3 rounded-lg border
                    text-black
              border-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <textarea
              // rows="4"
              rows={4}
              placeholder="Votre Message"
              className="p-3 rounded-lg border
                    text-black
              border-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </main>
    // <section>
    //   <div className="h-[50vh] flex items-center justify-center">
    //     <motion.h1
    //       initial={{ opacity: 0, y: 32 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{
    //         type: "tween",
    //         duration: 0.8,
    //         delay: 0.3,
    //         ease: [0.25, 0.25, 0.25, 0.75],
    //       }}
    //       className="text-center  text-3xl font-bold text-[#1a76cb]  md:text-6xl"
    //     >
    //       Contacter nous
    //     </motion.h1>
    //   </div>

    //   <div className="flex flex-col gap-10 px-4 md:px-28">
    //     <div>
    //       <motion.h2
    //         initial={{ opacity: 0, y: 32 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{
    //           type: "tween",
    //           duration: 0.8,
    //           delay: 0.6,
    //           ease: [0.25, 0.25, 0.25, 0.75],
    //         }}
    //         className="text-start text-2xl font-bold text-[#1a76cb] mb-2 md:text-3xl"
    //       >
    //         Nous sommes là pour vous aider ! Si vous avez des questions, des
    //         préoccupations ou des suggestions, n'hésitez pas à nous contacter
    //         par l'un des moyens suivants :
    //       </motion.h2>
    //     </div>

    //     <motion.div
    //       initial={{ opacity: 0, y: 32 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{
    //         type: "tween",
    //         duration: 0.8,
    //         delay: 0.9,
    //         ease: [0.25, 0.25, 0.25, 0.75],
    //       }}
    //     >
    //       <Card className="w-[350px]">
    //         <CardHeader>
    //           <CardTitle>Informations de contact</CardTitle>
    //           {/* <CardDescription>
    //             Deploy your new project in one-click.
    //           </CardDescription> */}
    //         </CardHeader>
    //         <CardContent>
    //           <div>
    //             <h1>Adresse :</h1>
    //             <p>
    //               Boulevard du Cameroun ligne 11 grand marché de Marcory abidjan
    //               Côte d'Ivoire
    //             </p>
    //           </div>
    //           <div>
    //             <h1>Téléphone :</h1>
    //             <p>+225 0564919216</p>
    //             <p>+225 0708201212</p>
    //             <p>+86 186 2097 5453 </p>
    //             <p>+86 188 0207 2454</p>
    //           </div>
    //           <div>
    //             <h1>Email :</h1>
    //             <p>royalcargo225@gmail.com</p>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </motion.div>
    //   </div>
    //   <Footer />
    // </section>
  );
};

export default Page;
