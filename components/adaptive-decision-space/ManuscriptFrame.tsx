import type { ReactNode } from "react"
import Link from "next/link"
import { ManuscriptStageRail } from "@/components/adaptive-decision-space/ManuscriptStageRail"
import styles from "@/components/adaptive-decision-space/manuscript.module.css"

type ManuscriptFrameProps = {
  children: ReactNode
  folio: string
  backHref: string
  backLabel: string
}

export function ManuscriptFrame({ children, folio, backHref, backLabel }: ManuscriptFrameProps) {
  return (
    <div className={styles.manuscriptFrame}>
      <a href="#ambiguity" className={styles.skipLink}>Skip to manuscript</a>
      <header className={styles.siteHeader}>
        <Link href="/" className={styles.wordmark} aria-label="Ardavan Mirhosseini, home">
          Ardavan Mirhosseini
        </Link>
        <nav className={styles.headerNav} aria-label="Portfolio navigation">
          <span>{folio}</span>
          <Link href={backHref}>{backLabel}</Link>
          <Link href="/#colophon">Contact</Link>
        </nav>
      </header>
      <ManuscriptStageRail />
      <main className={styles.manuscript}>{children}</main>
    </div>
  )
}
