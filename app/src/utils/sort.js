import { VOTE_ORDER, TIMESTAMP_ORDER } from '../utils/config';

const sortByVoteScore = items => {
  return Array.isArray(items)
    ? items.sort((a, b) => b.voteScore - a.voteScore)
    : items;
};

const sortByTimeStamp = items => {
  return Array.isArray(items)
    ? items.sort((a, b) => b.timestamp - a.timestamp)
    : items;
};

export const sortBy = (items, order = VOTE_ORDER) => {
  switch (order) {
    case VOTE_ORDER:
      return sortByVoteScore(items);
    case TIMESTAMP_ORDER:
      return sortByTimeStamp(items);
    default:
      return items;
  }
};
