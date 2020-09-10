import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';
import JSXLanguagePage from './pages/JSXLanguagePage';
import SetStatePage from './pages/SetStatePage';
import EmptyPage from './pages/EmptyPage';
import HomePage from './pages/HomePage';
import LifeCyclePage from './pages/LifeCyclePage';
import ClassComponentPage from './pages/ClassComponentPage';
import FunctionComponentPage from './pages/FunctionComponentPage';
import Layout from './pages/base/Layout';
import ReduxPage from './pages/ReduxPage';
import ReactReduxPage from './pages/ReactReduxPage';
import PureCompontPage from './pages/PureComponentPage';

function App() {
  return (
    <Layout showTopBar={true} showBottomBar={true} title='测试页面'>
      {{
        content: <div className="App">
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
          <Router>
            <Link to="/"> 首页 </Link>
            <Link to="/JSXlanguagePage"> JSX语法页面 </Link>
            <Link to="/SetStatePage"> SetState使用 </Link>
            <Link to="/LifeCyclePage"> LifeCycle </Link>
            <Link to="/ClassComponentPage"> Class组件 </Link>
            <Link to="/FunctionComponentPage"> Function组件 </Link>
            <Link to="/ReduxPage"> Redux使用 </Link>
            <Link to="/ReactReduxPage"> ReactRedux </Link>
            <Link to="/PureCompontPage"> PureCompont </Link>
            {/* 添加Switch表示仅匹配一个 */}
            <Switch>
              {/* 根路由添加exact,实现精确匹配 */}
              <Route
                exact
                path="/"
                component={HomePage}>
              </Route>
              <Route path="/JSXlanguagePage" component={JSXLanguagePage} />
              <Route path="/SetStatePage" component={SetStatePage} />
              <Route path="/LifeCyclePage" component={LifeCyclePage} />
              <Route path="/ClassComponentPage" component={ClassComponentPage} />
              <Route path="/FunctionComponentPage" component={FunctionComponentPage} />
              <Route path="/ReduxPage" component={ReduxPage} />
              <Route path="/ReactReduxPage" component={ReactReduxPage} />
              <Route path="/PureCompontPage" component={PureCompontPage} />
              <Route component={EmptyPage} />
            </Switch>
          </Router>
        </div>,
        btnClick: function () {
          console.log('btnClick')
        }
      }}
    </Layout>
  );
}

export default App;
