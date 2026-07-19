import styles from "./IesEnterpriseFrameworkVisuals.module.css"

export function AiNativeDiagnostic() {
  const stages = [
    { title: "AI added to interface", copy: "The existing workflow still defines the product." },
    { title: "AI shapes workflow", copy: "Intelligence begins to reorganize how work moves." },
    { title: "AI-native operating model", copy: "Intent, evidence, governance, and action become one system." },
  ]

  return (
    <figure className={styles.figure} aria-labelledby="ies-diagnostic-title">
      <figcaption id="ies-diagnostic-title" className={styles.caption}>Exhibit E.01c · AI-native diagnostic</figcaption>
      <p className={styles.blurb}>The diagnostic separated feature augmentation from a product whose operating model depends on intelligence.</p>
      <div className={styles.diagnostic}>
        <blockquote className={styles.diagnosticQuestion}>“If the AI disappeared, would the product still behave the same way?”</blockquote>
        <ol className={styles.sequence}>
          {stages.map((stage, index) => (
            <li key={stage.title}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage.title}</strong>
              <p>{stage.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}

export function ResearchToFramework() {
  return (
    <figure className={styles.figure} aria-labelledby="ies-synthesis-title">
      <figcaption id="ies-synthesis-title" className={styles.caption}>Exhibit E.01d · Research to framework</figcaption>
      <p className={styles.blurb}>We examined patterns across enterprise products, strategy research, and customer evidence without exposing confidential counts or source material.</p>
      <div className={styles.synthesis} role="img" aria-label="Product patterns, strategy research, and customer evidence become recurring interaction decisions and a shared enterprise framework">
        <ul className={styles.sources}>
          <li>Product patterns</li>
          <li>Strategy research</li>
          <li>Customer evidence</li>
        </ul>
        <span className={styles.arrow} aria-hidden="true">→</span>
        <div className={styles.synthesisResult}>
          <div className={styles.decision}>Recurring interaction decisions</div>
          <div className={styles.frameworkResult}>Shared enterprise framework</div>
        </div>
      </div>
    </figure>
  )
}

export function EnterpriseSystemModel() {
  return (
    <figure className={styles.figure} aria-labelledby="ies-system-title">
      <figcaption id="ies-system-title" className={styles.caption}>Exhibit E.01e · Scoped environment and governed object</figcaption>
      <p className={styles.blurb}>The shell is the persistent environment through which AI acts. It supplies scope, context, evidence, roles, and permissions; it is not the AI itself.</p>
      <div className={styles.model} role="img" aria-label="A scoped persistent environment containing an adaptive canvas, contextual command, governed object, evidence layer, role, and permissions">
        <aside className={styles.scopeRail} aria-label="Scope, role, and permissions">
          <span>Scope · Planning cycle</span>
          <span>Role · Finance operator</span>
          <span>Permission · Prepare</span>
        </aside>
        <div className={styles.environment}>
          <p className={styles.environmentLabel}>Persistent product environment</p>
          <div className={styles.canvasHeader}>
            <span>Adaptive canvas</span>
            <span>Context · Current period</span>
          </div>
          <div className={styles.governedObject}>
            <div>
              <h4 className={styles.objectTitle}>Governed object · Decision packet</h4>
              <span className={styles.objectState}>Review state · Evidence ready</span>
            </div>
            <ul className={styles.evidenceList} aria-label="Evidence states">
              <li>Source · Attached</li>
              <li>Freshness · Current</li>
              <li>Policy · Checked</li>
            </ul>
          </div>
          <div className={styles.contextCommand}>Contextual command · Prepare options within current scope</div>
        </div>
      </div>
    </figure>
  )
}

export function GovernedLifecycle() {
  const stages = [
    { title: "Intent", copy: "Outcome and scope recorded", state: "Established" },
    { title: "Evidence", copy: "Sources and freshness visible", state: "Established" },
    { title: "Policy", copy: "Constraints checked", state: "Established" },
    { title: "Impact", copy: "Expected consequence reviewed", state: "Established" },
    { title: "Authorization", copy: "Available after prior conditions", state: "Conditioned", ready: true },
    { title: "Receipt", copy: "Decision and change recorded", state: "After action" },
  ]

  return (
    <figure className={styles.figure} aria-labelledby="ies-lifecycle-title">
      <figcaption id="ies-lifecycle-title" className={styles.caption}>Exhibit E.01f · Governed decision lifecycle</figcaption>
      <p className={styles.blurb}>Authorization is not the starting point. It becomes available only after the system can show what is intended, supported, permitted, and expected to change.</p>
      <ol className={styles.lifecycle}>
        {stages.map((stage, index) => (
          <li key={stage.title} className={stage.ready ? styles.lifecycleReady : index < 4 ? undefined : styles.lifecycleLocked}>
            <span className={styles.stateLabel}>{stage.state}</span>
            <strong>{stage.title}</strong>
            <p>{stage.copy}</p>
          </li>
        ))}
      </ol>
      <ul className={styles.conditionList} aria-label="Authorization readiness conditions">
        <li>Scope known</li>
        <li>Evidence current</li>
        <li>Policy satisfied</li>
        <li>Impact reviewed</li>
      </ul>
    </figure>
  )
}

export function RoleAdaptedObject() {
  return (
    <figure className={styles.figure} aria-labelledby="ies-role-title">
      <figcaption id="ies-role-title" className={styles.caption}>Exhibit E.01g · One object, role-adapted views</figcaption>
      <p className={styles.blurb}>The underlying evidence, state, and history remain shared while density, available actions, and permissions adapt to the role.</p>
      <div className={styles.roleObject}>
        <dl className={styles.sharedObject}>
          <div><dt>Shared evidence</dt><dd>Sources, freshness, policy context</dd></div>
          <div><dt>Shared state</dt><dd>Review ready · action pending</dd></div>
          <div><dt>Shared history</dt><dd>Proposal, review, and decision record</dd></div>
        </dl>
        <div className={styles.roleViews}>
          <section className={styles.roleView} aria-label="Finance leader view">
            <span className={styles.roleBadge}>Finance leader</span>
            <h4>Decision-level view</h4>
            <p>Material impact, exceptions, policy posture, and authorization.</p>
          </section>
          <section className={styles.roleView} aria-label="Finance operator view">
            <span className={styles.roleBadge}>Finance operator</span>
            <h4>Preparation-level view</h4>
            <p>Source detail, open evidence tasks, resolution options, and escalation.</p>
          </section>
        </div>
      </div>
    </figure>
  )
}
