import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>Organ Donation Center (Welcome: Aman)</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={'/'} activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={ '/donarregistration' } activeClassName='active'>
                                <span className='glyphicon glyphicon-plus'></span> Donor Registration
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/wishlist' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Wishlist
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/savealife'} activeClassName='active'>
                                <span className='glyphicon glyphicon-thumbs-up'></span> Save a life
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/logout'} activeClassName='active'>
                                <span className='glyphicon glyphicon-log-out'></span> Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
