import { Trash } from "@phosphor-icons/react";
import styles from './styles.module.css'

export function TaskItem() {
  return (
    <section className={styles.container}>
      <div>
        <label>
          <input readOnly type="checkbox" />
          <span className={styles.checkbox}></span>
          <p className={styles.paragraph}>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
        </label>
      </div>

      <button>
      <Trash size={16} color="#808080" />
      </button>
    </section>
  )
}