import React from 'react';

const BlogP = () => {
    return (
        <div>
            <div className=' bg-slate-100 mb-10 '>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold pt-10 '>Blog</h1>
                <p className='text-center pt-1 lg:pt-3 pb-14'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 mb-10'>
                <h1 className='text-2xl'>When should use context API?</h1>
                <p className='pb-8'>When data or functionality has to be accessible by several components at various levels of the component tree, React's Context API should be utilized. By eliminating the need to send props down through several tiers of components, using the Context API can simplify code.There's no need to pass data to the children at each level.It's easy to maintain and very reusable.</p>


                <h1 className='text-2xl'>What is a custom hook?</h1>
                <p className='pb-8'>A custom hook is a JavaScript function that makes use of one or more of the built-in React hooks as well as additional JavaScript functions to encapsulate reusable functionality in a form that can be easily shared between components. A more modular and composable approach to reuse sophisticated logic can be implemented with the help of custom hooks.The main reason to write a custom hook is for code reusability.A custom hook does not require a specific signature.</p>


                <h1 className='text-2xl'>What is useRef?</h1>
                <p className='pb-8'>React has a hook called useRef that enables the creation of mutable references to elements or values that remain constant across component renders. It enables access to the current value of a variable or the underlying DOM node without requiring the component to be re-rendered.useRef is used to Directly interact with elements by gaining access to their DOM nodes.
                    Keep a changeable variable constant across renderings without requiring a new render.Save a variable that has to survive function calls, such as a socket reference, a timer ID, or an animation frame reference.</p>


                <h1 className='text-2xl'>What is useMemo?</h1>
                <p className='pb-8'>React's useMemo hook caches the calculated value of a function and returns the cached value on future renders if the inputs to the function have not changed. useMemo memoizes a function's output.Optimizing the speed of pricey calculations that are utilized as dependents in components is the goal of useMemo. The efficiency of an application can be improved by caching a computation's result to save having to recalculate it for each render.</p>
            </div>
        </div>
    );
};

export default BlogP;