import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Formik } from 'formik';

import { useDispatch } from '@src/app/Redux';
import { getBooksList } from '@src/features/SearchBooks/ducks/actions/searchBooksActions';
import { CATEGORIES, ORDER_BY } from '@src/widgets/SearchBar/constants';
import { useSelector } from '@src/app/Redux/utils';
import { BooksSelector } from '@src/features/SearchBooks';
import { TFilters } from '@src/entities/BooksList/types';

export const SearchBar: FC = () => {
  const dispatch = useDispatch();

  const { filters, isLoading } = useSelector(BooksSelector);

  return (
    <div>
      <Formik
        initialValues={filters}
        onSubmit={(values: TFilters) => {
          dispatch(getBooksList(values));
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Paper
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                boxShadow: 'none',
                flexWrap: 'wrap',
              }}
            >
              <InputBase
                name="searchValue"
                sx={{ ml: 1, flex: 1, minWidth: '320px' }}
                placeholder="Search for THE book"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={values.searchValue}
                onChange={handleChange}
                disabled={isLoading}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <FormControl sx={{ width: 150 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  name="category"
                  sx={{
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  }}
                  labelId="Category-select-label"
                  id="Category-select"
                  label="Category"
                  value={values.category}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  {CATEGORIES.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <FormControl sx={{ width: 150 }}>
                <InputLabel id="demo-simple-select-label">Relevance</InputLabel>
                <Select
                  name="orderBy"
                  sx={{
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  }}
                  labelId="Relevance-select-label"
                  id="OrderBy-select"
                  label="OrderBy"
                  value={values.orderBy}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  {ORDER_BY.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </form>
        )}
      </Formik>
    </div>
  );
};
