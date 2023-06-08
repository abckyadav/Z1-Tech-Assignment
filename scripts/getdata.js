async function getUser(user) {
  try {
    let res = await fetch(`https://api.github.com/search/users?q=${user}`);
    // let res = await fetch(`https://api.github.com/users/${user}`);
    let data = await res.json();
    console.log("data:", data);

    return data;
  } catch (error) {
    console.log("error in getUser:", error);
  }
}

export default getUser;
