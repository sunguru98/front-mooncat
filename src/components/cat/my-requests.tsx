import React, { useState, useCallback, useContext, useEffect } from "react";
import GraphContext from "../../contexts/graph/index";
import { CurrentAddressContext } from "../../hardhat/SymfoniContext";
import MooncatRescueContext from "../../contexts/mooncats/index";
import { Cat, AdoptionRequest } from "../../contexts/graph/types";
import CatNotifer from "./copy-notifer";
import CatItem from "./cat-item";
import Loader from "../ui/loader";

export const MyCatsRequests: React.FC = () => {
  const [currentAddress] = useContext(CurrentAddressContext);
  const { allRequests, catInfo, isDataLoading, fetchCatById } = useContext(
    GraphContext
  );
  const [cats, setCats] = useState<Cat[]>([]);
  const [isCopiedSuccessfully, setIsCopiedSuccessfully] = useState<boolean>(
    false
  );
  const { cancelRequest } = useContext(MooncatRescueContext);

  const handleCancelRequest = useCallback(
    async (cat: Cat) => {
      try {
        await cancelRequest(cat.id);
      } catch (e) {
        console.warn(e);
      }
    },
    [cancelRequest]
  );

  useEffect(() => {
    if (allRequests.length !== 0) {
      const myRequests = allRequests.filter(
        (item: AdoptionRequest) => item.from === currentAddress
      );
      const catsIds = myRequests.map((item) => item.id.split("::")[0]);
      Promise.all(catsIds.map((catId) => fetchCatById(catId))).then((cats) => {
        // @ts-ignore
        setCats(cats);
      });
    }
  }, [allRequests, currentAddress, fetchCatById]);

  const onCopyToClipboard = useCallback((cat: Cat) => {
    const textField = document.createElement("textarea");
    textField.innerText = cat.id;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setIsCopiedSuccessfully(true);
    window.setTimeout(() => setIsCopiedSuccessfully(false), 3000);
  }, []);

  if (!isDataLoading) {
    return (
      <div className="content center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="content">
      {cats.length === 0 && <div className="no-cats">No cats here...</div>}
      {cats.length !== 0 && (
        <div className="content__row content__items">
          {cats.map((cat) => (
            <CatItem
              key={cat.id}
              cat={cat}
              catInfo={catInfo && catInfo[cat.id]}
              onClick={onCopyToClipboard}
            >
              <div className="nft__control">
                <button
                  className="nft__button"
                  onClick={() => handleCancelRequest(cat)}
                >
                  Cancel Bid
                </button>
              </div>
            </CatItem>
          ))}
        </div>
      )}
      {isCopiedSuccessfully && <CatNotifer />}
    </div>
  );
};

export default React.memo(MyCatsRequests);
