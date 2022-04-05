import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20 mx-20'>
            <h3>What is context api and what is its purpose?</h3>
            <p>The Context API is a component structure provided by the React framework. It enables us to share specific forms of data and assists in solving prop-drilling across all levels of the application.</p>
            <p>The Context API can be used to share data with multiple components, without having to pass data through props manually. The Context API makes it easier to have our global and app-wide data available to all components. And making it easier and more accessible. The Context API can be used to share data with multiple components, without having to pass data through props manually. It is native and simple.</p>
            <h3 className='mt-20'>What is semantic tag?</h3>
            <p>Semantic HTML elements are those that clearly describes its meaning to both the browser and the developer. Semantic HTML tags allow us to add meaning to our markup so that search engines, screen readers, and web browsers can make sense of it. When a user agent reads a content it doesn’t understand the context and meaning. Semantic HTML tags let us serve structured content to that users. We should use semantic tags when we want to mark up a content block that has an important role in the document structure. In HTML There are many more semantic HTML5 tags that can be used to define different parts of a web page: such as header, main, footer, nav, section, article etc.</p>
        </div>
    );
};

export default Blogs;