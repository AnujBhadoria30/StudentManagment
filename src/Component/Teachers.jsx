import React from 'react';

function Teachers() {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        // You can handle form submission logic here (e.g., send data to an API)
        console.log("Form submitted");
    };

    return (
        <div className="flex items-center justify-center p-8">
            <div className="bg-white p-5 md:p-8 sm:border border-[#0DABB3] rounded-lg shadow-[0_4px_15px_rgba(13,171,179,0.5)]">
                <h2 className="text-sm sm:text-2xl font-semibold text-gray-800 mb-6 text-center">Teacher Information Form</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name and Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-[12px] sm:text-sm font-medium text-gray-700">
                                Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0DABB3] focus:border-[#0DABB3] text-[12px] sm:text-sm"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="number" className="block text-[12px] sm:text-sm font-medium text-gray-700">
                                Phone Number*
                            </label>
                            <input
                                type="text"
                                id="number"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0DABB3] focus:border-[#0DABB3] text-[12px] sm:text-sm"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    {/* Address and Class */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="address" className="block text-[12px] sm:text-sm font-medium text-gray-700">
                                Address*
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0DABB3] focus:border-[#0DABB3] text-[12px] sm:text-sm"
                                placeholder="Enter your address"
                            />
                        </div>
                        <div>
                            <label htmlFor="class" className="block text-[12px] sm:text-sm font-medium text-gray-700">
                                Class*
                            </label>
                            <select
                                id="class"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0DABB3] focus:border-[#0DABB3] text-[12px] sm:text-sm"
                            >
                                <option value="" disabled selected>
                                    Choose class
                                </option>
                                <option value="class1">Class 1</option>
                                <option value="class2">Class 2</option>
                                <option value="class3">Class 3</option>
                            </select>
                        </div>
                    </div>

                    {/* Work Experience and Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="experience" className="block text-[12px] sm:text-sm font-medium text-gray-700">
                                Work Experience (Years)*
                            </label>
                            <input
                                type="number"
                                id="experience"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0DABB3] focus:border-[#0DABB3] text-[12px] sm:text-sm"
                                placeholder="Enter work experience"
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-[12px] sm:text-sm font-medium text-gray-700">
                                Gender*
                            </label>
                            <select
                                id="gender"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0DABB3] focus:border-[#0DABB3] text-[12px] sm:text-sm"
                            >
                                <option value="" disabled selected>
                                    Select gender*
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-[#0DABB3] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#0a9396] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0DABB3] text-[12px] sm:text-sm"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Teachers;
