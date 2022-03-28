import { Col } from 'antd';
import React from 'react';
import AdminProducts from '../components/AdminProducts/AdminProducts';

const AdminPage = () => {
    return (
        <div>
            <Col span={12}>
                <AdminProducts />
            </Col>
        </div>
    );
};

export default AdminPage;