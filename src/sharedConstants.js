import {routes} from './routesConstants';
import config from './config/dynamicConfig';
const shared = {
  routes: routes,
  config,
  header: {
    menu: {
      primary: [
        {name: 'Main', to: '/main-page', showFor: ['staff', 'customer']},
        {name: 'Test', to: '/test-page', showFor: ['staff', 'customer']},
        {name: 'for Staff', to: '/', showFor: ['staff']},
        {name: 'for Customer', to: '/', showFor: ['customer']},
      ],
    },
  },
  mapping: [{value: 'testData', label: 'MappedData'}],

  selectExample: [
    {value: 'B', label: 'BUY'},
    {value: 'S', label: 'SELL'},
  ],

  statuses: {
    B: {
      title: 'BUY',
    },
    S: {
      title: 'SELL',
    },
  },
  errors: {
    400: {title: ' Bad Request'},
    401: {title: 'Unauthorized'},
    402: {title: 'Payment Required'},
    403: {title: 'Forbidden'},
    404: {title: 'Not Found'},
    405: {title: 'Method Not Allowed'},
  },
  subscriptionType: {
    subscription: 'SUBSCRIPTION',
    derive: 'DERIVE',
  },
};

export {shared};
