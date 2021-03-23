import Layout from '../Layout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const UserLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="#">My Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="#">Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    };

    const PurchaseHistory = () => (
        <div className="card mb-5">
            <h3 className="card-header">Purchase History</h3>
            <ul className="list-group">
                <li className="list-group-item">History</li>
            </ul>
        </div>
    );

    const UserInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">Name</li>
                <li className="list-group-item">Email</li>
                <li className="list-group-item">Role</li>
            </ul>
        </div>
    );

    return (
        <Layout title="Dashboard" className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                    <PurchaseHistory />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;