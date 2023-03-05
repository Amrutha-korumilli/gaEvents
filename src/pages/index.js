import React from 'react'
import * as ga from "../lib/ga"
import Router, { useRouter } from 'next/router'
export default function Main() {
    const router = new useRouter();
    ga.pageview(router?.asPath)
  return (
    <>
    <div>Hello</div>
    <div>
    <button onClick={() => ga.event("clicked","hello")}>Search</button>
</div>
</>
  )
}
