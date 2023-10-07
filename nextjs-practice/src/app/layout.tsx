import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
          <nav className={styles.nav}>
            <a href=''>Contact</a>
            <a href=''>About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
