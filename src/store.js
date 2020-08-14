import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 5,
  pages: 5,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Health",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.6,
      text: "TextHere Much Text Here Much Text Here"
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Benefits",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text:
        "Much Text Here Much Text Here Much Text Here Much Text Here Much Text Here"
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Details",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text:
        "Much Text Here Much Text Here Much Text Here Much Text HereMuch Text Here Much Text Here Much Text Here"
    }
  ],
  diamonds: [],
  top: createRef()
}

export default state
