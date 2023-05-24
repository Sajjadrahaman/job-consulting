import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='items-center flex h-40 justify-center bg-indigo-50 rounded-md'>
                <h2 className='text-3xl font-bold text-black'>Blog Page</h2>
            </div>
            <div className='grid md:grid-cols-2 my-10  gap-5 '>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-indigo-50 text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>When should you use context API?</h2>
                    <p className='font-semibold'>The Context API in React should be used when you have data or state that needs to be accessed by multiple components at different levels in our component tree. It helps avoid prop drilling and provides a way to manage state globally within your application, making it easy to share data across components without the need for intermediate props. Use it for managing user authentication or application-wide data.The Context API is useful when we want to avoid passing props down through intermediate components, improving code organization and performance. It can be used to manage state globally, making it easy to share data between components.
                    </p>
                </div>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-indigo-50 text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>What is a custom hook?</h2>
                    <p className='font-semibold'>
                    A custom hook in React is a JavaScript function that encapsulates logic and stateful behavior, allowing you to reuse it across multiple components. It is created by extracting complex logic from a component into a reusable function, and named with the "use" prefix to indicate that it follows the same rules as built-in React hooks. <br /> Custom hooks are useful for keeping your code organized, modular, and reusable. They allow you to separate concerns and simplify your components by encapsulating behavior that may otherwise be duplicated across multiple components. This can lead to improved readability, maintainability, and scalability of your codebase.
                    </p>
                </div>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-indigo-50 text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>What is useRef?</h2>
                    <p className='font-semibold'>
                    useRef is a built-in hook in React that allows us to reference a DOM element or a component instance, and provides a way to access and modify its properties without triggering a re-render. <br />
                    It returns a mutable ref object that can be used to store a value across renders, and is initialized with an initial value that can be anything, such as a string, a number, or an object. <br />
                    One common use case for useRef is to access a child component's properties or methods from a parent component. This can be useful for cases where you need to trigger an action on the child component.
                    </p>
                </div>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-indigo-50 text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>What is useMemo?</h2>
                    <p className='font-semibold'>
                    useMemo is a built-in hook in React that allows you to memoize a function or a value, and avoid unnecessary re-computations. It returns a cached value that is only re-computed when one of the dependencies has changed. It's useful for optimizing performance by caching the result of expensive computations and only re-calculating when needed. <br />
                    By using useMemo, you can improve the performance of your application by reducing the number of calculations needed to render your components. It's a simple but powerful tool for optimizing your code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;