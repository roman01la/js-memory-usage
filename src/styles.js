const mixins = {
  listReset: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
};

export default {
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
