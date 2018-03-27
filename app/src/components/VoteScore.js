import React from 'react';
import { ArrowUpward, ArrowDownward } from 'material-ui-icons';
import { upVote, downVote } from '../utils/config';
import PropTypes from 'prop-types';

const VoteScore = ({ item, handleVote }) => (
  <div>
    <ArrowUpward onClick={() => handleVote(item, upVote)} />
    <div style={{ textAlign: 'center' }}>{item.voteScore}</div>
    <ArrowDownward onClick={() => handleVote(item, downVote)} />
  </div>
);

VoteScore.propTypes = {
  item: PropTypes.object.isRequired,
  handleVote: PropTypes.func.isRequired
};

export default VoteScore;
