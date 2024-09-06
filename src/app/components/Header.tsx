"use client";

import React from 'react';
import { TextInput } from '@carbon/react';
import { Search } from '@carbon/icons-react';
import styles from './Header.module.css';
import useSearchStore from './Searchstore';

const Header: React.FC = () => {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);

  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className={styles.headerTitle}>AI for Climate Action Hub</h1>
        <p className={styles.headerDescription}>
          Your go-to resource for data sources, models, tools, and publications for AI for climate action.
        </p>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} />
            <TextInput
              className={styles.searchInput} 
              id="search-box"
              placeholder="Search..."
              labelText=""
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              type="text"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
