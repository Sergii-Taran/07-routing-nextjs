import Link from 'next/link';
import css from './SidebarNotes.module.css';

const tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => {
        const normalized = tag === 'All' ? 'all' : tag;

        return (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${normalized}`} className={css.menuLink}>
              {tag === 'All' ? 'All notes' : tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
