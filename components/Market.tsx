import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { MarketNav, NftCard } from '.';
import { CoinCard } from '.';

import Link from 'next/link';

import { useRecoilState, useRecoilValue } from 'recoil';
import { marketNavState, nftState, coinState } from '../atoms';

export const Market = () => {
  const [nfts, setNfts] = useRecoilState(nftState);

  const selectedMarket = useRecoilValue(marketNavState);
  const [coins, setCoins] = useRecoilState<any>(coinState);

  useEffect(() => {
    const fetchNfts = async () => {
      await axios.get('https://token.dlux.io/api/sales').then((response) => {
        console.log(response);
        setNfts(response.data.result);
      });
    };

    const fetchCoins = async () => {
      const { data: hiveData } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/hive',
        {
          headers: {
            accept: 'application/json',
          },
        }
      );
      const { data: hbdData } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/hive_dollar',
        {
          headers: {
            accept: 'application/json',
          },
        }
      );
      const { data: ethData } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/ethereum',
        {
          headers: {
            accept: 'application/json',
          },
        }
      );
      setCoins([hiveData, ethData, hbdData]);
    };

    if (!coins.length) {
      fetchCoins();
    }
    fetchNfts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <MarketNav />
      {selectedMarket === 'exchange' && (
        <>
          <h1 className="text-3xl mx-10 my-4 text-white font-medium">TOKENS</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-10">
            {coins &&
              coins.map((coin: any) => <CoinCard key={coin.id} coin={coin} />)}
          </div>
          <Link href="/listings" passHref={true}>
            <h1 className="cursor-pointer text-3xl ml-10 mb-4 w-1/5 mt-10 text-white font-medium">
              NFT
            </h1>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mx-10 my-3">
            {nfts &&
              nfts.map(
                (nft: any, i) =>
                  i <= 4 && <NftCard key={`${nft.set}_${nft.uid}`} nft={nft} />
              )}
          </div>
        </>
      )}
      {selectedMarket === 'apps' && <h1>Apps screen</h1>}
      {selectedMarket === 'news' && <h1>News screen</h1>}
    </div>
  );
};
