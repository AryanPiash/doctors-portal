import React from 'react';
import { useQuery } from 'react-query'
import LoadingSpinner from '../Shared/LoadingSpinner';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users',{
        method: 'GET', headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`   
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='px-8 pt-5'>
            <div className="overflow-x-auto border rounded-lg">
                <table className="table w-full">

                    <thead>
                        <tr><th>No.</th>
                            <th>User</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow 
                            key={index}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;