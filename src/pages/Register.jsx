import React from 'react'

export default function Register() {
    return (
        <div class="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-6">Create an Account</h2>
        <form>
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <button type="submit" class="w-full p-2 bg-gray-600 cursor-pointer text-white rounded-md hover:bg-gray-800">Sign Up</button>
        </form>
    </div>
    )
}
