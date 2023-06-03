"use strict";
const helper = {};

const star = '<i class="fa fa-star"></i>\n';
const halfStar = '<i class="fa fa-star-half"></i>\n';
const emptyStar = '<i class="fa fa-star-o"></i>\n';

helper.createStarList = (stars) => {
  let starList = ``;
  let count = Math.floor(stars);
  const half = stars - count;

  starList = star.repeat(count);
  if (half > 0.5) {
    starList += halfStar;
    ++count;
  }
  starList += emptyStar.repeat(5 - count);

  return starList;
};

module.exports = helper;
