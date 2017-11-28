import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
                            activeClassName='my-active'
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}
                            exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                // absolute path
                                pathname: '/new-post'

                                // relative path
                                // pathname: this.props.match.url + '/new-post',
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* technically we can remove switch tag. not needed */}
                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts' component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;