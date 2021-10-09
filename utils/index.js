import hive from '@hiveio/hive-js';

const _Rixits =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+=';

export const toNumber = (Base64) => {
  var result = 0;
  var base64 = Base64.split('');
  for (var e = 0; e < base64.length; e++) {
    result = result * 64 + _Rixits.indexOf(base64[e]);
  }
  return result;
};

export const toBase64 = (number) => {
  if (
    number !== number || // NaN !== NaN, equal true
    number === null ||
    number === Number.POSITIVE_INFINITY
  )
    throw 'The input is not valid';
  if (number < 0) throw "Can't represent negative numbers now";
  let rixit;
  let residual = Math.floor(number);
  let result = '';
  while (true) {
    rixit = residual % 64;
    result = _Rixits.charAt(rixit) + result;
    residual = Math.floor(residual / 64);
    if (residual == 0) break;
  }
  return result;
};

export const formatData = (data) => {
  return data.map((el) => {
    return {
      x: el[0],
      y: el[1],
    };
  });
};

export const getColor = (id) => {
  switch (id) {
    case 'hive':
      return ['rgba(255, 99, 132)', 'rgba(255, 99, 132, 0.5)'];
    case 'ethereum':
      return ['rgba(211, 211, 211)', 'rgba(211, 211, 211, 0.5)'];
    default:
      return ['rgba(123, 239, 178)', 'rgba(123, 239, 178, 0.5)'];
  }
};

export const options = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineHeight: 1.5,
  },
  animation: {
    duration: 2000,
  },
  maintainAspectRatio: true,
  responsive: true,
  scaleFontColor: '#FFF',
  fontColor: '#FFF',
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'HH:mm',
          unit: 'hour',
          unitStepSize: 1,
          displayFormats: {
            minute: 'HH:mm',
            hour: 'HH:mm',
            min: '00:00',
            max: '23:59',
          },
        },
      },
    ],
  },
};

export const Auction = (username, nftData) => {
  console.log(username);
  const operations = [
    'custom_json',
    {
      required_auths: [username],
      required_posting_auths: 0,
      id: nftData.uid ? 'dlux_nft_auction' : 'dlux_ft_auction',
      json: JSON.stringify(nftData),
    },
  ];

  if (window.hive_keychain) {
    window.hive_keychain.requestBroadcast(
      '_' + Math.random().toString(36).substr(2, 9),
      [operations],
      'active',
      (response) => console.log(response)
    );
  }
};

export const FTOpen = (username, set) => {
  const operations = [
    'custom_json',
    {
      required_auths: [username],
      required_posting_auths: [],
      id: 'dlux_ft_mint',
      json: JSON.stringify({
        set,
      }),
    },
  ];

  if (window.hive_keychain) {
    window.hive_keychain.requestBroadcast([operations], 'active', (response) =>
      console.log(response)
    );
  }
};

export const FTAirdrop = (username, ftData) => {
  let user;
  hive.api.getAccounts([...ftData.to], (err, result) => {
    if (err) throw new Error(err);
    if (result.length === ftData.to.length) {
      user = result[0];
    } else {
      console.log("One or more users don't exist");
    }
  });
  if (user) {
    const operations = [
      'custom_json',
      {
        required_auths: [username],
        required_posting_auths: [],
        id: 'dlux_ft_airdrop',
        json: JSON.stringify(ftData),
      },
    ];

    if (window.hive_keychain) {
      window.hive_keychain.requestBroadcast(
        [operations],
        'active',
        (response) => console.log(response)
      );
    }
  }
};

export const Give = (username, giveData) => {
  let user;
  hive.api.getAccounts([giveData.to], (err, result) => {
    if (err) throw new Error(err);
    if (result !== []) {
      user = result[0];
    } else {
      console.log('No user to send to');
    }
  });
  if (user) {
    const operations = [
      'custom_json',
      {
        required_auths: [username],
        required_posting_auths: [],
        id: giveData.uid ? 'dlux_nft_transfer' : 'dlux_ft_transfer',
        json: JSON.stringify(giveData),
      },
    ];

    if (window.hive_keychain) {
      window.hive_keychain.requestBroadcast(
        [operations],
        'active',
        (response) => console.log(response)
      );
    }
  }
};

export const Sell = (username, sellData) => {
  const operations = [
    'custom_json',
    {
      required_auths: [username],
      required_posting_auths: [],
      id: sellData.uid ? 'dlux_nft_sell' : 'dlux_ft_sell',
      json: JSON.stringify(sellData),
    },
  ];

  if (window.hive_keychain) {
    window.hive_keychain.requestBroadcast([operations], 'active', (response) =>
      console.log(response)
    );
  }
};

export const NFTMelt = (username, nftData) => {
  const operations = [
    'custom_json',
    {
      required_auths: [username],
      required_posting_auths: [],
      id: 'dlux_nft_melt',
      json: JSON.stringify(nftData),
    },
  ];

  if (window.hive_keychain) {
    window.hive_keychain.requestBroadcast([operations], 'active', (response) =>
      console.log(response)
    );
  }
};

export const NFTBuy = (username, nftData) => {
  const operations = [
    'custom_json',
    {
      required_auths: [username],
      required_posting_auths: [],
      id: 'dlux_nft_buy',
      json: JSON.stringify(nftData),
    },
  ];

  if (window.hive_keychain) {
    window.hive_keychain.requestBroadcast([operations], 'active', (response) =>
      console.log(response)
    );
  }
};

export const NFTBid = (username, nftData) => {
  const operations = [
    'custom_json',
    {
      required_auths: [username],
      required_posting_auths: [],
      id: 'dlux_nft_bid',
      json: JSON.stringify(nftData),
    },
  ];

  if (window.hive_keychain) {
    window.hive_keychain.requestBroadcast([operations], 'active', (response) =>
      console.log(response)
    );
  }
};
