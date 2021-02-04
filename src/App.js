import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/NavigationBar/Navbar'
import Blog from './components/Blog'
import Home from './components/Home'
import Code from './components/Code'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Creativity from './components/Creativity'
import Admin from './components/AdminPages/Admin'
import CreatePost from './components/AdminPages/CreatePost'
import EditPost from './components/AdminPages/EditPost'
import DeletePost from './components/AdminPages/DeletePost'
import './App.css';


import PostList from './components/PostList'

function App() {
  return (
    <Router>
      <header className="showcase">
        <Navbar/>
        <Switch>
        <Route path="/posts" exact component={PostList} />
        </Switch>
        <Route path="/" exact component={Home} />
        <Route path="/diary" exact component={Blog} />
        <Route path="/code" exact component={Code} />
        <Route path="/about" exact component={About} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/paintings" exact component={Creativity} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/create" exact component={CreatePost} />
        <Route path="/edit" exact component={EditPost} />
        <Route path="/delete" exact component={DeletePost} />
      </header>
    </Router>
  );
}

export default App;
