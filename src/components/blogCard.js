import React from "react"

import { Link } from "gatsby"

import styles from "../styles/components/blogCard.module.scss"
import myPic from "../images/my-pic.jpg"
import blogPic from "../images/blog1.jpg"


class BlogCard extends React.Component {
    render () {
        return (
            <div className={styles.CardContainer}>
                <div className={styles.cardImage}>
                    <img alt="" src={blogPic}></img>
                </div>
                <div className={styles.cardText}>
                    <div>
                        <h2>
                            <Link to="/blogPost/"  className={styles.title}>
                                Title of the first post on this blog 
                            </Link>
                        </h2>
                    </div>
                    <div className={styles.date}>Thursday, November 13, 2014</div>
                    <div className={styles.previewText}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec.
                        </p>
                    </div>
                    <Link to="/blogPost/" className={styles.readMore}>Read More ></Link>
                    <div className={styles.authorInfo}>
                        <img src={myPic} alt="" className={styles.authorImg}></img>
                        <p className={styles.authorName}>
                            by <Link to="/about/">Somya Bansal</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default BlogCard;
