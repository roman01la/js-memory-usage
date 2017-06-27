import { h, render, Component } from 'preact';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import styles from './styles';
import labels from './labels';
import { formatSize } from './formatters';
import { dataMap, dataSet, dataIdxed, dataList } from './data';
import Tabs from './tabs';
import renderToolTip from './tooltip';
import renderLegend from './legend';

const colors = {
  b0: '#540D6E',
  b1: '#EE4266',
  b2: '#3BCEAC',
  b3: '#0EAD69'
};

const sum = ({ b0, b1, b2, b3 }) => b0 + b1 + b2 + b3;

const chartData = {
  List: dataList,
  Map: dataMap,
  Array: dataIdxed,
  Set: dataSet
};

const hints = {
  List: 'singly linked list',
  Map: 'collection of key value pairs',
  Array: 'indexed collection',
  Set: 'collection of unique values'
};

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      hiddenKeys: new Set(),
      currTab: 'List'
    };
    this._toggleDataKey = this._toggleDataKey.bind(this);
    this._selectTab = this._selectTab.bind(this);
  }
  _toggleDataKey(hiddenKeys, dataKey) {
    if (hiddenKeys.has(dataKey)) {
      hiddenKeys.delete(dataKey);
    } else {
      hiddenKeys.add(dataKey);
    }
    this.setState(s => ({ ...s, hiddenKeys }));
  }
  _selectTab(currTab) {
    this.setState(s => ({ ...s, currTab }));
  }
  render() {
    const { hiddenKeys, currTab } = this.state;

    const data = chartData[currTab]
      .sort((o1, o2) => sum(o1) - sum(o2))
      .map(({ b0, b1, b2, b3, ...o }) => {
        const r = [b0, b1, b2, b3]
          .map(v => Math.round(v))
          .reduce((o, v, idx) => {
            o['b' + idx] = v;
            return o;
          }, {});
        const d = { ...o, ...r };
        hiddenKeys.forEach(k => (d[k] = undefined));
        return d;
      });

    return h(
      'div',
      { style: styles.wrapper },
      h(
        'div',
        { style: styles.chartTitle },
        h('h1', {}, currTab),
        h('div', {}, `(${hints[currTab]})`)
      ),
      h(Tabs, {
        tabs: ['List', 'Array', 'Map', 'Set'],
        onSelect: this._selectTab,
        currTab
      }),
      h(
        ResponsiveContainer,
        {},
        h(
          BarChart,
          { data },
          h(XAxis, { dataKey: 'name' }),
          h(YAxis, { tickFormatter: formatSize }),
          h(CartesianGrid, { strokeDasharray: '1 1' }),
          h(Tooltip, { content: renderToolTip, animationDuration: 200 }),
          h(Legend, {
            content: renderLegend,
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical',
            disabled: hiddenKeys,
            onClick: ({ dataKey }) => this._toggleDataKey(hiddenKeys, dataKey)
          }),
          h(Bar, { dataKey: 'b0', stackId: 's', fill: colors.b0 }),
          h(Bar, { dataKey: 'b1', stackId: 's', fill: colors.b1 }),
          h(Bar, { dataKey: 'b2', stackId: 's', fill: colors.b2 }),
          h(Bar, { dataKey: 'b3', stackId: 's', fill: colors.b3 })
        )
      ),
      h(
        'div',
        {},
        h(
          'a',
          {
            href: 'https://github.com/roman01la/js-memory-usage',
            style: styles.link
          },
          'GitHub'
        )
      )
    );
  }
}

render(h(Chart), window.app);
