import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { triggerLogout } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';


const mapStateToProps = state => ({
    user: state.user,
});

class AdminPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && (this.props.user.userName === null || this.props.user.userRole !== 'admin')) {
            this.props.history.push('home');
        }
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
        this.props.history.push('login');
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <div>
                        {this.props.data}
                    </div>
                    <button id="logout"
                        onClick={this.logout}>Log Out</button>
                    <h1 id="welcome">
                        Welcome, {this.props.user.userName}
                    </h1>
                    <h2>Admin Page</h2>
                    <p id="textOurStory"> No woman should stand alone.</p>
                    <div id="rosie"></div>

                </div>
            );
        }

        return (
            <div>
                <Nav />
                {content}
            </div>
        );
    }
}

export default connect(mapStateToProps)(AdminPage);