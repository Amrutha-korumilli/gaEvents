import React from 'react'
import * as ga from "../pages/lib/ga"

export default function Main() {
    ga.pageview("/home")
  return (
    <>
    <div>Hello</div>
    <div>
    <button onClick={() => ga.event("clicked")}>Search</button>
</div>
</>
  )
}
