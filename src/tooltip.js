import { h } from 'preact';
import styles from './styles';
import labels from './labels';
import { formatSize } from './formatters';

export default props => {
  const { label, active, payload } = props;

  if (active) {
    return h(
      'div',
      { style: styles.toolTip },
      h('div', { style: styles.toolTipTitle }, label),
      h(
        'ul',
        { style: styles.toolTipList },
        payload
          .filter(({ value }) => value)
          .reverse()
          .map(({ dataKey, color, value }) =>
            h(
              'li',
              { key: dataKey, style: styles.toolTipItem(color) },
              h(
                'span',
                { style: styles.toolTipItemLabel },
                `${labels[dataKey]}:`
              ),
              h('span', { style: styles.toolTipItemValue }, formatSize(value))
            )
          )
      )
    );
  } else {
    return null;
  }
};
