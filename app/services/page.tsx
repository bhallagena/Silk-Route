"use client"
import Slide from "@/components/Slide"
import { Briefcase, Globe, HandHelping, PaintBucket, Ribbon, Stamp, Volleyball } from "lucide-react"
import Image from "next/image"
import styled from "styled-components"

type Props = {}

const Page = (props: Props) => {
  const features = [
    {
      icon: <Globe />,
      title: "Sourcing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      image: "/services/1.jpg",
    },
    {
      icon: <HandHelping />,
      title: "Hand Skills",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      image: "/services/2.jpg",
    },
    {
      icon: <Stamp />,
      title: "Printing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      image: "/services/3.jpg",
    },
    {
      icon: <Ribbon />,
      title: "Weaving",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      image: "/services/4.jpg",
    },
    {
      icon: <Volleyball />,
      title: "Embroidery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      image: "/services/5.jpg",
    },
    {
      icon: <PaintBucket />,
      title: "Dyeing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      image: "/services/6.jpg",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Briefcase className="w-12 h-12 text-primary" />
              </div>
            <Slide>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Services</h1>
            </Slide>
            <Slide delay={0.2}>
            <p className="mt-4 text-xl text-gray-600">Hear directly from our satisfied customers</p>
            </Slide>
          </div>
          <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"></div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <StyledWrapper key={idx}>
                <Slide delay={(idx * 0.1)+0.2}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="bg-white flex flex-col items-center justify-center space-y-3 p-6 border rounded-lg flip-card-front">
                      <div className="text-black ">{item.icon}</div>
                      <h4 className="text-lg text-gray-900 font-semibold">{item.title}</h4>
                      <p className="text-center text-gray-600">{item.desc}</p>
                    </div>
                    <div className="flip-card-back">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        layout="fill"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
                </Slide>
              </StyledWrapper>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const StyledWrapper = styled.div`
  .flip-card {
    width: 100%;
    height: 250px;
    background-color: transparent;
    perspective: 1000px;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
  }

  .flip-card-back {
    transform: rotateY(180deg);
    overflow: hidden;
  }
`

export default Page

