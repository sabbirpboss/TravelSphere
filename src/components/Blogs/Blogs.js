import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
        <h1>"Question & Answer"</h1>
      <div className="blog">
        <h2>
          Question:1: Difference between authorization and authentication?
        </h2>
        <p>
          Answer: Simply put, authentication is the process of verifying who
          someone is, whereas authorization is the process of verifying what
          specific applications, files, and data a user has access to. The
          situation is like that of an airline that needs to determine which
          people can come on board. The first step is to confirm the identity of
          a passenger to make sure they are who they say they are. Once a
          passenger's identity has been determined, the second step is verifying
          any special services the passenger has access to, whether it's flying
          first-class or visiting the VIP lounge.
        </p>
      </div>
      <div className="blog">
        <h2>
          Question:1: Why are you using firebase? What other options do you have
          to implement authentication?
        </h2>
        <p>
          Answer:Firebase Analytics gives you undeniable insight into user
          behavior. You can use this knowledge to make informed decisions about
          how to market your app better and to reach out to the audiences that
          you want to target. With Firebase, you can focus your time and
          attention on developing the best app(s) possible for your business.
          Firebase has a lot of built in features to make sure this is exactly
          what you do. <br />
          Authentication methods include something users know, something users
          have and something users are. Not every authentication type is created
          equal to protect the network, however; these authentication methods
          range from offering basic protection to stronger security. Using more
          than one method -- multifactor authentication (MFA) -- is recommended.
        </p>
      </div>
      <div className="blog">
        <h2>
          Question:1: What other services does firebase provide other than
          authentication?
        </h2>
        <p>
          Answer:Firebase provides different kinds of services that help
          you to develop high-quality mobile and web applications to grow your
          business.
          With Firebase, developers don't need to worry about the backend
          programming, Authentication, API development, database (real-time
          cloud-hosted NoSQL database and cloud firestore), File storage, etc.
          Firebase provides all the services with very efficient and fast
          performance. Now, let's look at some of the services and use of it.
          There are many services without authentication which Firebase provides, Most useful of them
          are: Cloud Firestore, Cloud Functions, Hosting, Cloud
          Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links,
          Remote Config.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
