import React, { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  userState,
  broadcastState,
  refreshState,
  apiLinkState,
} from "../../atoms";

import { Login } from "../Login";

import { useRouter } from "next/router";
import { Spinner } from "../Spinner";

import { placeHolder } from "../../constants";

import { FaBars } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";

import Image from "next/image";
import { redoProfilePicture, setProfile } from "../../utils";

import { useHiveKeychainCeramic } from "@spknetwork/auth-react";
import axios from "axios";
import {
  useLanguageQuery,
  useTranslation,
  LanguageSwitcher,
} from "next-export-i18n";
import { useQuery } from "../../constants/breakpoints";

export const NavBar = () => {
  const { isMobile } = useQuery();
  const [profDropdown, setProfDropdown] = useState(false);
  const [languageSelect, setLanguageSelect] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [signing, setSigning] = useState(false);
  const [user, setUser] = useRecoilState<any>(userState);
  const [pfpData, setPfp] = useState<any>(placeHolder);
  const router = useRouter();
  const apiLink: string = useRecoilValue(apiLinkState);
  const url = router.pathname.split("/")[1];
  const broadcasts: any = useRecoilValue(broadcastState);
  const refresh: string = useRecoilValue(refreshState);
  const { t } = useTranslation();
  const connector = useHiveKeychainCeramic();
  const [query] = useLanguageQuery();

  const removeLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("ally-supports-cache");
    localStorage.removeItem("hive.ceramic.id");
    localStorage.removeItem("hive.ceramic.secret");
  };

  const handleLogout = () => {
    setUser(null);
    removeLocalStorage();
    setProfDropdown(false);
  };

  const handleTrades = () => {
    router.push({ pathname: "/trades", query });
    setProfDropdown(false);
  };

  const handleSettings = () => {
    router.push({ pathname: "/settings", query });
    setProfDropdown(false);
  };

  useEffect(() => {
    if (refresh === "pfp" || refresh === "") {
      if (user) {
        setSigning(false);
        setProfDropdown(false);
        axios.get(`${apiLink}api/pfp/${user.name}`).then(({ data }) => {
          setPfp(data.result[0]);
        });
      }
    }
  }, [user, refresh]);

  useEffect(() => {
    if (pfpData) {
      const uid = pfpData.pfp?.split(":");
      const script = pfpData.set?.s;

      if (pfpData.pfp !== placeHolder) {
        if (uid && script) {
          redoProfilePicture({ script, uid });
        }
      }
    }
  }, [pfpData]);

  useEffect(() => {
    const getUser = async () => {
      const userStor = window.localStorage.getItem("user");

      if (userStor) {
        setUser(JSON.parse(userStor));
        const response = await connector.login();
        const didId = response?.context?.did?.id;

        if (didId) {
          let profile = await connector.idxUtils.getUserProfile(didId);
          if (!profile) {
            const metadata = JSON.parse(
              JSON.parse(userStor).posting_json_metadata
            );
            if (connector.ceramic.did?.id !== null) {
              setProfile(metadata);
            }
          }
        }
      }
    };

    if (!user && window !== undefined) {
      getUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-black text-white px-5 font-normal py-3 pb-2 flex justify-between items-center z-50">
      {!isMobile ? (
        <div className="flex gap-10 flex-grow justify-center items-center">
          <p
            className={`${url === "" && "selected"} navLink`}
            onClick={() => router.push({ pathname: "/", query })}
          >
            {t("home")}
          </p>
          <p
            className={`${
              (url === "inventory" ||
                url === "create-nft" ||
                url === "trades" ||
                url === "nft") &&
              "selected"
            } ${user ? "navLink" : "text-gray-600 cursor-not-allowed"}`}
            onClick={() => {
              if (user) {
                router.push({ pathname: "/inventory", query });
              }
            }}
          >
            {t("inventory")}
          </p>
          <p
            className={`${url === "auction" && "selected"} navLink`}
            onClick={() => router.push({ pathname: "/auction", query })}
          >
            {t("auctionHouse")}
          </p>
          <p
            className={`${url === "listings" && "selected"} navLink`}
            onClick={() => router.push({ pathname: "/listings", query })}
          >
            {t("listings")}
          </p>
        </div>
      ) : (
        <div className="flex-grow-0">
          <div className="absolute left-4 top-4">
            <FaBars
              color={"#FFF"}
              size={25}
              onClick={() => setDropdown((prevState) => !prevState)}
            />
          </div>
        </div>
      )}

      {user && (
        <div className="flex gap-7 items-center">
          <FcGlobe
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setLanguageSelect(!languageSelect);
              profDropdown === true && setProfDropdown(false);
            }}
          />
          <div className="flex items-center gap-5">
            <h1
              className="navLink w-full"
              onClick={() => {
                setProfDropdown(!profDropdown);
                languageSelect === true && setLanguageSelect(false);
              }}
            >
              {user.name}
            </h1>
            <div className="flex items-center w-full ">
              <div
                id="profile-picture"
                className={`w-9 ${
                  pfpData?.set?.n === "hf" ? "mb-5" : ""
                } cursor-pointer`}
                onClick={() => router.push(`/@${user.name}`)}
              >
                <Image height={30} width={30} src={placeHolder} alt="profile" />
              </div>
            </div>
          </div>

          <div
            className={`${
              profDropdown ? "" : "hidden"
            } absolute bg-white top-14 right-2 px-2 pt-2 rounded-xl flex flex-col z-40`}
          >
            <a onClick={handleSettings} className="btn">
              {t("settings")}
            </a>
            <a onClick={handleTrades} className="btn">
              {t("pendingTrades")}
            </a>
            <a className="btn" onClick={handleLogout}>
              {t("logout")}
            </a>
          </div>
        </div>
      )}
      {!user && (
        <div className="flex gap-7 items-center">
          <FcGlobe
            size={30}
            className="cursor-pointer"
            onClick={() => setLanguageSelect(!languageSelect)}
          />
          <div onClick={() => setSigning(true)} className="flex mr-5 navLink">
            <h1>{t("login")}</h1>
          </div>
        </div>
      )}
      {signing && <Login handleClose={() => setSigning(false)} />}
      {languageSelect && (
        <div
          className={`${
            languageSelect ? "" : "hidden"
          } absolute bg-white top-14 ${
            user ? "right-32" : "right-24"
          } px-2 pt-2 rounded-xl flex flex-col z-40`}
        >
          <LanguageSwitcher lang="en">
            <a className={`btn ${query.lang === "en" ? "bg-gray-400" : ""}`}>
              English
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="de">
            <a className={`btn ${query.lang === "de" ? "bg-gray-400" : ""}`}>
              Deutsche
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="es">
            <a className={`btn ${query.lang === "es" ? "bg-gray-400" : ""}`}>
              Español
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="fr">
            <a className={`btn ${query.lang === "fr" ? "bg-gray-400" : ""}`}>
              Français
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="lt">
            <a className={`btn ${query.lang === "lt" ? "bg-gray-400" : ""}`}>
              Lietuvių
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="pt">
            <a className={`btn ${query.lang === "pr" ? "bg-gray-400" : ""}`}>
              Português
            </a>
          </LanguageSwitcher>

          <LanguageSwitcher lang="cn">
            <a className={`btn ${query.lang === "cn" ? "bg-gray-400" : ""}`}>
              中文
            </a>
          </LanguageSwitcher>
        </div>
      )}
      {dropdown && (
        <div className="absolute top-14 p-2 bg-white rounded-xl text-center z-50">
          <p
            className={`${
              url === "" && "selected"
            } navLink text-black hover:text-gray-800`}
            onClick={() => router.push("/")}
          >
            {t("home")}
          </p>
          <p
            className={`${
              (url === "inventory" ||
                url === "create-nft" ||
                url === "trades") &&
              "selected"
            } ${
              user
                ? "navLink text-black hover:text-gray-800"
                : "text-gray-600 pb-2 cursor-not-allowed"
            }`}
            onClick={() => {
              if (user) {
                router.push("/inventory");
              }
            }}
          >
            {t("inventory")}
          </p>
          <p
            className={`${
              url === "auction" && "selected"
            } navLink text-black hover:text-gray-800`}
            onClick={() => router.push("/auction")}
          >
            {t("auctionHouse")}
          </p>
          <p
            className={`${
              url === "listings" && "selected"
            } navLink text-black hover:text-gray-800`}
            onClick={() => router.push("/listings")}
          >
            {t("listings")}
          </p>
        </div>
      )}
      <div className={"fixed bottom-5 right-5 grid-cols-1"}>
        {broadcasts.map((broadcast: any) => (
          <Spinner key={broadcast.id} broadcast={broadcast} time={63} />
        ))}
      </div>
    </div>
  );
};
