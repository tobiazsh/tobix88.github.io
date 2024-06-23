import React from 'react'
import styles from "../page.module.css";
import { redirect } from "next/navigation";

const page = () => {

    redirect("https://github.com/tobix88/wetter-web-sms-hartberg");

    return (
        <div className={styles.main}>
            REDIRECTING...
        </div>
    )
}

export default page