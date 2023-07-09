import * as React from "react"

import Image from "next/image"

import { PersonalInfo } from "@/constants/personal-info"
import { Balancer } from "react-wrap-balancer"

import "./styles.css"

const LandingSection: React.FC = () => {
  return (
    <div className="mx-auto flex  max-w-[74rem] flex-col-reverse items-center justify-between gap-8 py-10 sm:h-[100vh] sm:flex-row sm:py-0">
      <div>
        <h1 className="intro-text">
          <Balancer>
            Hi 👋,
            <br /> My name is
            <br />{" "}
            <span className="intro-text-gradient">{PersonalInfo.name}</span>
            <br /> I build Web & Mobile Apps
          </Balancer>
        </h1>
      </div>

      <div>
        <div className="relative h-[12rem] w-[12rem] overflow-hidden rounded-full">
          <Image src={PersonalInfo.avatarURL} alt="" fill priority />
        </div>
      </div>
    </div>
  )
}

export default LandingSection
