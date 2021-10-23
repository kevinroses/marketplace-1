import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState, prefixState, broadcastState } from '../atoms';
import { ReserveRespond, toBase64 } from '../utils';

type TradeCardProps = {
  trade: {
    from: string;
    item: string;
    kind: string;
    price: number;
    script: string;
    set: string;
    to: string;
    uid: string;
  };
};

export const NFTManage = ({ trade }: TradeCardProps) => {
  const user: any = useRecoilValue(userState);
  const prefix: string = useRecoilValue(prefixState);
  const [_broadcasts, setBroadcasts] = useRecoilState<any>(broadcastState);
  const [randomUID, setRandomUID] = useState('==');

  const randomUIDGen = (setData: any) => {
    const num = Math.round(Math.random() * (setData.max - (setData.min || 0)));
    const UID = toBase64(num);
    setRandomUID(UID);
  };

  useEffect(() => {
    if (trade.kind === 'fts') {
      axios
        .get(`https://token.dlux.io/api/set/${trade.set}`)
        .then(({ data }) => {
          setInterval(() => {
            randomUIDGen(data.set);
          }, 1000);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (trade.kind !== 'fts') {
      axios
        .get(`https://ipfs.io/ipfs/${trade.script}?${trade.uid}`)
        .then(({ data }) => {
          const code = `(//${data}\n)("${trade.uid}")`;
          const SVG = eval(code);
          document.getElementById(
            `${trade.item}-${trade.from}-${trade.to}`
          )!.innerHTML = SVG.HTML;
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (trade.kind === 'fts') {
      axios
        .get(`https://ipfs.io/ipfs/${trade.script}?${randomUID}`)
        .then(({ data }) => {
          const code = `(//${data}\n)("${randomUID}")`;
          const SVG = eval(code);

          if (
            document.getElementById(`${trade.item}-${trade.from}-${trade.to}`)
          ) {
            document.getElementById(
              `${trade.item}-${trade.from}-${trade.to}`
            )!.innerHTML = SVG.HTML;
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomUID]);

  const handleDecline = async () => {
    ReserveRespond(
      user.name,
      prefix,
      {
        set: trade.set,
        uid: trade.kind === 'fts' ? undefined : trade.uid,
        price: trade.price,
      },
      'cancel'
    ).then((response: any) => {
      response &&
        response.success &&
        setBroadcasts((prevState: any) => [...prevState, response]);
    });
  };

  return (
    <div className="rounded-xl border shadow-xl h-auto border-transparent bg-gray-700 text-white flex flex-col">
      <div className="text-center text-xl py-2 rounded-t-xl bg-white text-black">
        <h1>{trade.to}</h1>
      </div>
      <div className="w-full flex justify-center py-2">
        <div className="relative">
          {trade.kind === 'fts' && (
            <div className="bg-gray-700 absolute top-0 w-full h-full bg-opacity-70 flex justify-center items-center">
              <FaQuestion size={60} color="#fff" />
            </div>
          )}
          <div
            id={`${trade.item}-${trade.from}-${trade.to}`}
            className="w-40"
          ></div>
        </div>
      </div>
      <div className="text-center text-xl pb-2">
        {trade.kind !== 'fts' ? trade.item : trade.set}
      </div>
      <div className="text-center text-md">
        Price: {(trade.price / 1000).toFixed(3)} DLUX
      </div>
      <div className="flex sm:justify-center pt-2 pb-4 gap-3">
        <button
          onClick={handleDecline}
          className="px-3 py-1 rounded-lg border-2 text-white bg-red-500 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
