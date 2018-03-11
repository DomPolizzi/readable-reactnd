import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { VOTE_ORDER, TIMESTAMP_ORDER } from '../utils/config';

const CategoryBar = ({ categories, order, handleOrderChange }) => (
  <AppBar position="static">
    <Toolbar>
      {categories &&
        categories.length > 0 &&
        categories.map((category, i) => (
          <Link to={category.path} key={i} style={{ textDecoration: 'none' }}>
            <Button color="contrast">{category.name}</Button>
          </Link>
        ))}
      <FormControl>
        <Select
          style={{ color: 'white' }}
          value={order}
          onChange={handleOrderChange}
          input={<Input id="order-tag" />}
        >
          <MenuItem value={VOTE_ORDER}>Vote Score</MenuItem>
          <MenuItem value={TIMESTAMP_ORDER}>Time</MenuItem>
        </Select>
      </FormControl>
    </Toolbar>
  </AppBar>
);

export default CategoryBar;
