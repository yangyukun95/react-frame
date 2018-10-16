import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.contain}>
        <div>
          this is react frame base on react & ant-design & redux-saga
        </div>
        <div className={styles.link}>
          <a target="_blank" href="http://www.css88.com/react/docs/thinking-in-react.html"> React </a>
          <a target="_blank" href="https://ant.design/docs/react/introduce-cn"> Ant Design of React </a>
          <a target="_blank" href="https://redux-saga-in-chinese.js.org/"> Redux-Saga </a>
          <a target="_blank" href="http://reacttraining.cn/web"> React-router-dom v4 </a>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  loading: state.home.loading,
});

export default connect(mapState)(Home);
