import { h } from 'preact';
import styles from './styles';
import labels from './labels';

export default props => {
  const { payload, disabled, onClick } = props;

  return h(
    'ul',
    { style: styles.legendList },
    payload.map(entry =>
      h(
        'li',
        {
          style: styles.legendItem(disabled.has(entry.value)),
          key: entry.value,
          onClick: () => onClick(entry)
        },
        h('div', { style: styles.legendItemIcon(entry.color) }),
        labels[entry.value]
      )
    )
  );
};
