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

const colors = {
  b0: '#540D6E',
  b1: '#EE4266',
  b2: '#3BCEAC',
  b3: '#0EAD69'
};

const labels = {
  b0: 'empty',
  b1: '10 items',
  b2: '100 items',
  b3: '1000 items'
};

const mixins = {
  listReset: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
};

const styles = {
  wrapper: {
    fontFamily: 'sans-serif',
    color: '#242424',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  chartTitle: {
    textAlign: 'center'
  },
  legendList: {
    ...mixins.listReset,
    margin: '0 0 0 16px',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  legendItem: disabled => ({
    fontSize: 14,
    opacity: disabled ? 0.4 : 1,
    margin: '8px 0',
    display: 'flex'
  }),
  legendItemIcon: color => ({
    background: color,
    width: 16,
    height: 16,
    borderRadius: 2,
    margin: '0 8px 0 0'
  }),
  tabsList: {
    ...mixins.listReset,
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0'
  },
  tabItem: active => ({
    padding: '8px 16px',
    fontSize: 14,
    border: 'none',
    color: active ? '#fff' : null,
    background: active ? '#3BCEAC' : '#eee',
    borderRadius: 2,
    margin: '0 8px'
  }),
  toolTip: {
    background: '#fff',
    padding: 8,
    borderRadius: 2,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
  },
  toolTipTitle: {
    margin: '0 0 8px 0'
  },
  toolTipList: {
    ...mixins.listReset
  },
  toolTipItem: color => ({
    margin: '0 0 4px 0',
    display: 'flex',
    justifyContent: 'flex-between',
    color
  }),
  toolTipItemLabel: {
    width: 100
  },
  toolTipItemValue: {}
};

const sum = ({ b0, b1, b2, b3 }) => b0 + b1 + b2 + b3;

const formatSize = bytes => {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  } else {
    return `${Math.round(bytes / 1024)} KB`;
  }
};

const dataMap = [
  {
    name: 'JavaScript',
    b0: 197.016,
    b1: 882.352,
    b2: 6870.2,
    b3: 60762.608
  },
  {
    name: 'ImmutableJS',
    b0: 19.976,
    b1: 1897.168,
    b2: 17404.792,
    b3: 182599.904
  },
  {
    name: 'ClojureScript',
    b0: 11.864,
    b1: 1367.592,
    b2: 8877.656,
    b3: 121323.768
  },
  { name: 'Kotlin', b0: 413.456, b1: 2230.152, b2: 20032.696, b3: 227163.968 },
  { name: 'GopherJS', b0: 74, b1: 960, b2: 13451, b3: 170437 },
  {
    name: 'RacketScript',
    b0: 234.688,
    b1: 1633.32,
    b2: 13657.544,
    b3: 147176.56
  },
  { name: 'Reason', b0: 345, b1: 1442, b2: 11167, b3: 108343 },
  { name: 'Elm', b0: 11.368, b1: 1076.36, b2: 10436.36, b3: 104329.2 }
];

const dataSet = [
  { name: 'JavaScript', b0: 166.04, b1: 432.168, b2: 2646.2, b3: 20564.048 },
  {
    name: 'ImmutableJS',
    b0: 20.224,
    b1: 1572.456,
    b2: 15680.4,
    b3: 123836.416
  },
  {
    name: 'ClojureScript',
    b0: 11.952,
    b1: 706.472,
    b2: 5325.976,
    b3: 123868.216
  },
  { name: 'Kotlin', b0: 443.84, b1: 1575.968, b2: 11219.92, b3: 106779.984 },
  { name: 'Reason', b0: 71, b1: 971, b2: 8082, b3: 80404 },
  { name: 'Elm', b0: 11.424, b1: 1114.608, b2: 10475.792, b3: 104248.064 }
];

const dataIdxed = [
  {
    name: 'JavaScript',
    b0: 93.144,
    b1: 247.304,
    b2: 1342.584,
    b3: 11598.584
  },
  {
    name: 'ImmutableJS',
    b0: 22.312,
    b1: 619.52,
    b2: 2643.56,
    b3: 20485.28
  },
  {
    name: 'ClojureScript',
    b0: 11.096,
    b1: 298.088,
    b2: 1589.032,
    b3: 11238
  },
  { name: 'Kotlin', b0: 119.472, b1: 270.416, b2: 1248.416, b3: 10443.376 },
  { name: 'GopherJS', b0: 259, b1: 388, b2: 781, b3: 4349 },
  { name: 'RacketScript', b0: 141.664, b1: 216.344, b2: 918.064, b3: 8112.088 },
  { name: 'Reason', b0: 145, b1: 200, b2: 920, b3: 8120 },
  { name: 'Elm', b0: 11.456, b1: 208.288, b2: 1267.408, b3: 11220.536 }
];

const chartData = {
  Map: dataMap,
  Indexed: dataIdxed,
  Set: dataSet
};

const renderLegend = props => {
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

const renderToolTip = props => {
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

const Tabs = ({ title, tabs, currTab, onSelect }) =>
  h(
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

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      hiddenKeys: new Set(),
      currTab: 'Indexed'
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
      h('h1', { style: styles.chartTitle }, currTab),
      h(Tabs, {
        tabs: ['Indexed', 'Map', 'Set'],
        onSelect: this._selectTab,
        currTab
      }),
      h(
        ResponsiveContainer,
        { width: '80%', height: 600 },
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
      )
    );
  }
}

render(h(Chart), window.app);
