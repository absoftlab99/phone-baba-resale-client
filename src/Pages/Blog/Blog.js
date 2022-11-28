import React from 'react';

const Blog = () => {
    return (
        <div className='mx-20 my-10 shadow-xl border'>
            <div className='p-10'>
                <h1 className='text-4xl text-left font-semibold'>Blog-1: What are the different ways to manage a state in a React application?</h1>
                <p className='text-justify mt-10'>
                Managing state in your React apps isn’t as simple as using useState or useReducer. Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose? In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                <br></br>
                <br></br>
                <b className='text-2xl'>The Four Kinds of React State to Manage</b><br></br>
                When we talk about state in our applications, it’s important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps:
                <ol className='list-decimal list-inside pt-2'>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </ol>
                Let's cover each of these in detail:<br></br>
                <b>Local (UI) state –</b> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.<br></br><br></br>
                <b>Global (UI) state –</b> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.<br></br><br></br>
                <b>Server state –</b> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br></br><br></br>
                <b>URL state –</b> Data that exists on our URLs, including the pathname and query parameters.
                URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!<br></br>
                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
        </div>
    );
};

export default Blog;