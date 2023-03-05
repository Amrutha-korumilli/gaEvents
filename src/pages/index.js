import React from 'react'
import * as ga from "../pages/lib/ga"

export default function Main() {
    ga.pageview("/home")
    const GAEventsTracker = ga.useGAEventsTracker("External Links");
  return (
    <>
    <div>Hello</div>
    <div>
    <button onClick={() => GAEventsTracker("clicked")}>Search</button>
</div>
</>
  )
}
