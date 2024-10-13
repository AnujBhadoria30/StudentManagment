import React, { useState, useEffect, useContext } from 'react'; // Import useContext
import { ToastContainer, toast } from 'react-toastify'; // Importing Toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify CSS
import { UserContext } from './Contex'; // Import UserContext

function Students() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [students, setStudents] = useState([]);
    const { incrementStudentCount, decrementStudentCount } = useContext(UserContext); // Use context

    useEffect(() => {
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
            setStudents(JSON.parse(storedStudents));
        }
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        resetForm();
    };

    const handleSave = () => {
        if (!name || !password || !gender || !studentClass) {
            toast.error('Please fill all the fields!');
            return;
        }

        const newStudent = { name, password, gender, studentClass };
        const updatedStudents = [...students, newStudent];
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));

        toast.success('Student added successfully!');
        incrementStudentCount(); // Increment count
        handleClose();
    };

    const resetForm = () => {
        setName('');
        setPassword('');
        setGender('');
        setStudentClass('');
    };

    const handleDelete = (studentIndex) => {
        const updatedStudents = students.filter((_, index) => index !== studentIndex);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        
        // Decrement the student count in context
        decrementStudentCount(); // Call decrement function
    };

    const handleEdit = (studentIndex) => {
        const studentToEdit = students[studentIndex];
        setName(studentToEdit.name);
        setPassword(studentToEdit.password);
        setGender(studentToEdit.gender);
        setStudentClass(studentToEdit.studentClass);
        handleDelete(studentIndex);
        handleOpen();
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 rounded-lg">
            <div className='border border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)] p-5 rounded-lg'>
                <button
                    onClick={handleOpen}
                    className="
                        text-xs sm:text-base 
                        py-2 px-1 sm:p-3 sm:py-3
                        bg-[#0DABB3] hover:bg-green-600
                        transition duration-300 
                        rounded-md sm:rounded-lg 
                        w-full sm:w-auto
                        sm:min-w-[200px]
                        text-white"
                >
                    Add New Student
                </button>

                <div className="grid grid-cols-1 gap-4 mt-10 text-center space-y-10 ">
                    {['1', '2', '3', '4', '5'].map((classNum) => (
                        <div key={classNum} className="border-2 pr-5 p-2 text-center shadow-b-lg rounded-lg" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <h3>{classNum} Class</h3>
                            {students.filter(student => student.studentClass === classNum).map((student, index) => {
                                const originalIndex = students.findIndex(s => s.name === student.name && s.gender === student.gender && s.password === student.password && s.studentClass === student.studentClass);

                                return (
                                    <div key={originalIndex} className="mt-2 p-2 border rounded">
                                        <p>Name: {student.name}</p>
                                        <p>Gender: {student.gender}</p>
                                        <div className="flex justify-between mt-2">
                                            <button
                                                onClick={() => handleEdit(originalIndex)}
                                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(originalIndex)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Add New Student</h2>
                        <form>
                            <div>
                                <label className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Gender</label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="border p-2 w-full"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Class</label>
                                <select
                                    value={studentClass}
                                    onChange={(e) => setStudentClass(e.target.value)}
                                    className="border p-2 w-full"
                                    required
                                >
                                    <option value="">Select Class</option>
                                    {['1', '2', '3', '4', '5'].map((classNum) => (
                                        <option key={classNum} value={classNum}>
                                            {classNum} Class
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer position="top-right" />
        </div>
    );
}

export default Students;
