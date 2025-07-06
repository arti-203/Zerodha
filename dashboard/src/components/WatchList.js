import React, { useState } from "react";

import { Tooltip, Grow } from "@mui/material";

import {BarChartOutlined, keyboardArrowDown, keyboardArrowUp, MoreHoriz} from "@mui/icons-material";

import { watchlist } from "../data/data";

const WatchList = () => {
  return (
    <div className="watchList-container">
      <div className="search-container">
        <input
        type="text"
        name="search"
        id="search"
        placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
        className="search"
        />
        <span className="counts"> {watchlist.length} / 50 </span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
      })} 
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     <div className="item">
      <p className={stock.isDown ? "dowm" : "up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <keyboardArrowDown className="down" />
        ) : (
        <keyboardArrowUp className="down" />
        )}
        <span className="price">{stock.price}</span>
      </div>
     </div>
     {showWatchlistActions && <WatchListActions uid={stock.name} /> }
    </li>
  ); 
};

const WatchListActions = ({ uid }) => {
  return <span className="actions">
    <span>
      <Tooltip tittle="Buy (B)"
       placement="top"
        arrow
         TransitionComponent={Grow}
         >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
       tittle="Sell (S)"
       placement="top"
        arrow
         TransitionComponent={Grow}
         >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
       tittle="Analytics (A)"
       placement="top"
        arrow
         TransitionComponent={Grow}
         >
          <button className="action">
            <BarChartOutlined className="icon" />
            </button>
      </Tooltip>
      <Tooltip
       tittle="More (M)"
       placement="top"
        arrow
         TransitionComponent={Grow}
         >
         <button className="action">
            <MoreHoriz className="icon" />
            </button> 
        <button className="btn">More</button>
      </Tooltip> 
    </span>
  </span>;
};