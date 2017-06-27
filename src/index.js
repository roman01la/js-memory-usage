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

const dstypes = {
  List: {
    Kotlin: 0,
    Elm: 1,
    RacketScript: 1,
    Reason: 1,
    ClojureScript: 1
  },
  Map: {
    JavaScript: 0,
    Elm: 1,
    ClojureScript: 1,
    Reason: 1,
    RacketScript: 1,
    GopherJS: 0,
    ImmutableJS: 1,
    Kotlin: 0
  },
  Array: {
    RacketScript: 0,
    GopherJS: 0,
    Reason: 0,
    Kotlin: 0,
    Elm: 1,
    ClojureScript: 1,
    JavaScript: 0,
    ImmutableJS: 1
  },
  Set: {
    JavaScript: 0,
    Reason: 1,
    Elm: 1,
    Kotlin: 0,
    ClojureScript: 1,
    ImmutableJS: 1
  }
};

const getPath = (x, y, width, height) => {
  return `M ${x},${y} h ${width} v ${height} h ${-width} Z`;
};

const shapeBar = (dkey, ds) => props => {
  const { fill, x, y, width, height, name } = props;
  const title = dstypes[ds][name] === 0 ? 'MUTABLE' : 'IMMUTABLE';
  const fillLine = props[dkey] !== undefined ? fill : 'transparent';
  let fs = width / 10;
  fs = fs <= 10 ? 10 : fs;
  return h(
    'g',
    {},
    h(
      'text',
      {
        x: x + width / 2,
        y: y - fs,
        fontSize: fs,
        fontWeight: 600,
        textAnchor: 'middle',
        fill: fillLine
      },
      title
    ),
    h('path', {
      d: getPath(x, y - 6, width, 2),
      stroke: 'none',
      fill: fillLine
    }),
    h('path', { d: getPath(x, y, width, height), stroke: 'none', fill })
  );
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
          h(YAxis, { tickFormatter: formatSize, padding: { top: 16 } }),
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
          h(Bar, {
            dataKey: 'b0',
            stackId: 's',
            fill: colors.b0,
            shape: shapeBar('b0', currTab)
          }),
          h(Bar, {
            dataKey: 'b1',
            stackId: 's',
            fill: colors.b1,
            shape: shapeBar('b1', currTab)
          }),
          h(Bar, {
            dataKey: 'b2',
            stackId: 's',
            fill: colors.b2,
            shape: shapeBar('b2', currTab)
          }),
          h(Bar, {
            dataKey: 'b3',
            stackId: 's',
            fill: colors.b3,
            shape: shapeBar('b3', currTab)
          })
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
