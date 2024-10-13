
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Contex';

function N() {
    const { notices, addNotice, removeNotice } = useContext(UserContext); 
    const [formData, setFormData] = useState({
        topic: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNotice(formData); // Add notice to context
        navigate({ state: { student: formData } });
        setFormData({
            topic: '',
            description: ''
        });
    };

    return (
        <>
        <div className="flex justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md sm:border-2 border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)]">
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[12px] sm:text-sm font-medium text-gray-700 mb-1">
                            Topic<sup className="text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            name="topic"
                            required
                            placeholder="Enter Topic Name..."
                            className="input-field w-full p-2 border-t border-l border-[#0DABB3] rounded-md focus:outline-none text-sm sm:text-base"
                            value={formData.topic}
                            onChange={handleChange}
                            />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[12px] sm:text-sm font-medium text-gray-700 mb-1">
                            Description<sup className="text-red-500">*</sup>
                        </label>
                        <textarea
                            name="description"
                            required
                            placeholder="Enter Details..."
                            className="input-field w-full p-2 border-t border-l border-[#0DABB3] rounded-md focus:outline-none text-sm sm:text-base"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            />
                    </div>

                    <div className="mt-6 text-[12px] sm:text-sm">
                        <input
                            type="submit"
                            value="Submit"
                            className="submit-btn w-full bg-[#0DABB3] text-white py-2 rounded-md hover:bg-green-500 transition duration-300"
                            />
                    </div>
                </form>
            </div>
            </div>

            <div className="p-2 sm:p-11  flex flex-wrap justify-center">
                <div className="sm:p-4 bg-white rounded-lg  flex-grow max-w-[150px] sm:max-w-[500px]   border border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)]">
                    <h2 className=" text-sm sm:text-xl font-semibold sm:font-bold mb-4">Notice Board</h2>
                    {notices.length > 0 ? (
                        <ul className="space-y-4 w-full h-64 overflow-auto">
                            {notices.map((notice, index) => (
                              <li key={index} className="h-full max-h-44 border border-[#0DABB3] bg-white shadow-[0_4px_15px_rgba(13,171,179,0.5)] p-2 flex items-center justify-between rounded-lg overflow-hidden">
                              <div className="text-black w-full overflow-auto">
                                  <span className="font-semibold sm:font-bold">Topic:</span> {notice.topic}<br />
                                  <span className=" font-semibold sm:font-bold">Description:</span>
                                  <div className="max-h-24 overflow-auto">{notice.description}</div>
                              </div>
                              <button 
                                  onClick={() => removeNotice(index)} 
                                  className="text-red-500 hover:text-red-700 ml-2 border-2 rounded-full bg-red-300"
                              >
                                  ❌
                              </button>
                          </li>
                          
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 text-sm sm:text-xl">No notices available.</p>
                    )}
                </div>
            </div>
        
                        </>
    );
}

export default N;
