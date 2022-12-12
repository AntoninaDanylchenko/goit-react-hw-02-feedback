import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statisticContainer}>
    <ul>
      <li className={css.statisticItem}>
        Good: <span className={css.statisticSpan}>{good}</span>
      </li>
      <li className={css.statisticItem}>
        Neutral: <span className={css.statisticSpan}>{neutral}</span>
      </li>
      <li className={css.statisticItem}>
        Bad: <span className={css.statisticSpan}>{bad}</span>
      </li>
      <li className={css.statisticItem}>
        Total: <span className={css.statisticSpan}>{total}</span>
      </li>
      <li className={css.statisticItem}>
        Positive feedback:{' '}
        <span className={css.statisticSpan}>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

export default Statistics;
