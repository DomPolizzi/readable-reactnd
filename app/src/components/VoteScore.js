import React from 'react';
import { ArrowUpward, ArrowDownward } from 'material-ui-icons';
import { upVote, downVote } from '../utils/config';

const VoteScore = ({ item, handleVote }) => (
  <div>
    <ArrowUpward onClick={() => handleVote(item, upVote)} />
    <div style={{ textAlign: 'center' }}>{item.voteScore}</div>
    <ArrowDownward onClick={() => handleVote(item, downVote)} />
  </div>
);
export default VoteScore;
