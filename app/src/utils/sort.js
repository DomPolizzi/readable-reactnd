import { VOTE_ORDER, TIMESTAMP_ORDER } from '../utils/config';

const sortByVoteScore = posts => {
  return Array.isArray(posts)
    ? posts.sort((a, b) => b.voteScore - a.voteScore)
    : posts;
};

const sortByTimeStamp = posts => {
  return Array.isArray(posts)
    ? posts.sort((a, b) => b.timestamp - a.timestamp)
    : posts;
};

export const sortBy = (order, posts) => {
  switch (order) {
    case VOTE_ORDER:
      return sortByVoteScore(posts);
    case TIMESTAMP_ORDER:
      return sortByTimeStamp(posts);
    default:
      return posts;
  }
};
