import React from "react"

import Header from "./header"
import styles from "../styles/components/layout.module.scss"

export default ({children}) => (
    <div className={styles.layoutContainer}>
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
    </div>
)