
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [usernameHistory, setUsernameHistory] = useState([]);
    const [notices, setNotices] = useState([]); // New state for notices
    const [studentCount, setStudentCount] = useState(0); 

    const addUser = (user) => {
        setUsers([...users, user]);
        setUsernameHistory([...usernameHistory, user.username]);
    };

    const findUser = (username, password) => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setLoggedInUser(user);
        }
        return user;
    };

    const logoutUser = () => {
        setLoggedInUser(null);
    };



    const addNotice = (notice) => {
        setNotices([...notices, notice]); // Notice ko add karein
    };
    console.log(addNotice,notices);
    const removeNotice = (index) => {
        setNotices((prevNotices) => prevNotices.filter((_, i) => i !== index));
    };
    const incrementStudentCount = () => {
        setStudentCount(prevCount => prevCount + 1); // Increment the student count
    };
    // console.log(incrementStudentCount,studentCount)
    const decrementStudentCount = () => {
        setStudentCount(prevCount => Math.max(prevCount - 1, 0)); // Prevent negative count
    };
    return (
        <UserContext.Provider value={{ users, incrementStudentCount ,decrementStudentCount, studentCount, addUser, findUser, loggedInUser, usernameHistory, logoutUser, notices, addNotice,removeNotice }}>
            {children}
        </UserContext.Provider>
    );
};
