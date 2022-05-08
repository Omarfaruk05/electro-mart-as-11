import React from 'react';

const Blogs = () => {
    return (
        <div className='main bg-light'>
            <div className='container p-5'>
                <div>
                    <h3>1. Difference between JavaScript and NodeJS</h3>
                    <p><strong>NodeJS:</strong> NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is used in server-side development.</p>
                    <p><strong>JavaScript:</strong> Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spider monkey in Firefox.Javascript is used in frontend development.</p>
                </div>
                <div>
                    <h3>2. Why should we use NodeJS and MongoDB?</h3>
                    <p>NodeJS for applications with heavy computing server-side. MongoDB for building quick scalable fully functional managed database. NodeJS used for simple CRUD application where no API needed to load data. MongoDB used for global cluster atlases. NodeJS consider with server-side web applications with relational database. MongoDB fallout document database prominent with NoSQL database family.</p>
                </div>
                <div>
                    <h3>3. Difference between JavaScript and NodeJS</h3>
                    <p><strong>SQL :</strong> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property.</p>
                    <p><strong> NoSQL :</strong> Non-relational or distributed database system.Non-relational or distributed database system.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries. Horizontally scalable. Follows CAP(consistency, availability, partition tolerance).</p>
                </div>
                <div>
                    <h3>4. What is the purpose of JWT & how it works?</h3>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    <br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: The header and the payload. The signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;