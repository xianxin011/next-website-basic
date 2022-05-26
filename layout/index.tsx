import Head from 'next/head'
import styles from './layout.module.less'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}