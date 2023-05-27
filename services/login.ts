export async function Login() {
  const URL: string = "";
  const graphqlQuerry: string = "";

  const headers = {
    "content-type": "application/json",
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuerry),
  };
  try {
    const response = await fetch(URL,options)
    const data = await response.json() 
    return data
  } catch (err) {
    return err;
  }
}

export async function signIn(username:string, email:string, password:string){
    const URL: string = "http://10.100.1.203:3000/graphql";
    const graphqlQuerry: string = `mutation{
        createUser(createUserInput: {
          username: ${username}
          email: ${email}
          password: ${password}
        }){
          user_id
          username
          email
          password
        }
      }`
  
    const headers = {
      "content-type": "application/json",
    };
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(graphqlQuerry),
    };
    try {
      const response = await fetch(URL,options)
      const data = await response.json() 
      console.log(data)
      return data
    } catch (err) {
      return err;
    }
}
