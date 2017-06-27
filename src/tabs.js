import { h } from 'preact';
import styles from './styles';

export default ({ title, tabs, currTab, onSelect }) => {
  return h(
    'ul',
    { style: styles.tabsList },
    tabs.map(tab =>
      h(
        'li',
        { key: tab },
        h(
          'button',
          {
            style: styles.tabItem(tab === currTab),
            onClick: () => onSelect(tab)
          },
          tab
        )
      )
    )
  );
};
