import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: `purple`, fontSize: `36px` }}>
        <Header headerText="fdeclerck.github.io!" />
        <Link to="/contact/">Contact</Link> 
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
