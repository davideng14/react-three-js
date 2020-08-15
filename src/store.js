import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  paragraphs: [
    {
      offset: 0,
      factor: 1.5,
      header: "",
      image: "/exercise.jpeg",
      aspect: 1.35,
      text: ""
    },
    {
      offset: 1,
      factor: 1.3,
      header: "Health and Benefits",
      image: "/health.jpg",
      aspect: 1.35,
      text:
        "test test test test"
    }
  ],
  diamonds: [],
  top: createRef()
}

export default state
