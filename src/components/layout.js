import React from "react"

import Header from "./header"

export default ({children}) => (
    <div>
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
    </div>
)