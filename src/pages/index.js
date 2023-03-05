import React from 'react'
import * as ga from "../lib/ga"
import Router, { useRouter } from 'next/router'
export default function Main() {
    const router = new useRouter();
    ga.pageview(router?.asPath)
    const props={action:"clicked",category:"search"}
  return (
    <>
    <div>Hello</div>
    <div>
    <button onClick={() => ga.event({action:"clicked",category:"search",label:"search click",value:"value"})}>Search</button>
</div>
</>
  )
}
