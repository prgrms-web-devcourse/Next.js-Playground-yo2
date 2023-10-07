import styles from './layout.module.css'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
        <a href=''>여자옷</a>
        <a href=''>남자옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  )
}
