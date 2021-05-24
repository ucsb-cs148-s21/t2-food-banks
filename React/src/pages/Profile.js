import React from "react";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";


export default function Profile() {
  const user = getUser();

  return (
    // <Layout user={user}>
      <Container>
        <h1>This is your Profile page!</h1>
        <div>
          Here's what this app knows about you based on your Google login:
        </div>
        <pre>{JSON.stringify(user, null, "\t")}</pre>
        <div>
          Your name is "{user.fullName}" and your email is "{user.email}."
        </div>
        <div>Google also says that you're a fan of good doggos :)</div>
      </Container>
    // </Layout>
  );
}
