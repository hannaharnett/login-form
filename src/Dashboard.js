import React from 'react';
import { getUser, removeUserSession } from './utils';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Dashboard = (props) => {
    const user = getUser();

    const clickHandler = () => {
        removeUserSession();
        props.history.push("/login");
    }
    return (
        <div className="dashboard">
            <h2>Welcome {user.name}!</h2>
            <Button variant="primary" size="lg" block onClick={clickHandler}>Logout</Button>
        </div>
    )
}

export default Dashboard;