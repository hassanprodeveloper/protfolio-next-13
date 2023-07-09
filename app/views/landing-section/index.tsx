import * as React from "react"
import { Balancer } from "react-wrap-balancer"

import Image from "next/image"

import { PersonalInfo } from "constants/personal-info"

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
        <div className="sm:h[20rem] relative h-[12rem] w-[12rem] overflow-hidden rounded-full sm:w-[20rem]">
          <Image src={PersonalInfo.avatarURL} alt="" fill priority />
        </div>
      </div>
    </div>
  )
}

export default LandingSection
