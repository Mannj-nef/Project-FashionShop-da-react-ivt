import AdminLayout from '../../layout/AdminLayout';
import React from 'react';

export function PrivateRouter(props) {
	const { children } = props;
	return <AdminLayout>{children}</AdminLayout>;
}

