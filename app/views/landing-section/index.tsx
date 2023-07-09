import * as React from "react"

import Image from "next/image"

import { PersonalInfo } from "@/constants/personal-info"
import { Balancer } from "react-wrap-balancer"

import "./styles.css"

const LandingSection: React.FC = () => {
  return (
    <div className="py-10 sm:py-0  sm:h-[100vh] flex gap-8 sm:flex-row flex-col-reverse justify-between items-center mx-auto max-w-[74rem]">
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
        <div className="w-[12rem] h-[12rem] relative overflow-hidden rounded-full">
          <Image src={PersonalInfo.avatarURL} alt="" fill priority />
        </div>
      </div>
    </div>
  )
}

export default LandingSection
