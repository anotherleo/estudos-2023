import React from 'react'
import styles from './styles.module.scss'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head />
      <body>
        <nav>About Navbar</nav>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </>
  )
}
