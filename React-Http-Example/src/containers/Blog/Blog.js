import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from '../../containers/Blog/NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth: true
    }

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
                    {/* this is how you load components asynchronously  */}
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts}/>
                    <Route render= {() => <h1>404 Not Found</h1>} />
                    {/* If you want to use redirect outside switch don't include from */}
                    <Redirect from='/' to='/posts' />
                </Switch>
            </div>
        );
    }
}

export default Blog;