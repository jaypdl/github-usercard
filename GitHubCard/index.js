import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// console.log(axios.get('https://api.github.com/users/jaypdl'));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker({ avatar_url, name, login, location, html_url, followers, following, bio  }) {
  //creating elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const rName = document.createElement('h3');
  const userName = document.createElement('p');
  const loc = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const uFollowers = document.createElement('p');
  const uFollowing = document.createElement('p');
  const uBio = document.createElement('p');

  //adding classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  rName.classList.add('name');
  userName.classList.add('username');

  //creating hierarchy
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(rName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(loc);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(uFollowers);
  cardInfo.appendChild(uFollowing);
  cardInfo.appendChild(uBio);
  // profile.appendChild(link); //Moving this down under content to make it show up

  //Adding content
  image.src = avatar_url;
  rName.textContent = name;
  userName.textContent = login;
  loc.textContent = `Location: ${location}`;
  profile.textContent = `Profile: `;
  link.href = html_url;
  link.textContent = html_url;
  uFollowers.textContent = `Followers: ${followers}`;
  uFollowing.textContent = `Following: ${following}`;
  uBio.textContent = `Bio: ${bio}`;
  profile.appendChild(link); //Moved from hierarchy to make it work

  return card;
}

const testObj = {
  "login": "jaypdl",
  "id": 20601752,
  "node_id": "MDQ6VXNlcjIwNjAxNzUy",
  "avatar_url": "https://avatars3.githubusercontent.com/u/20601752?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jaypdl",
  "html_url": "https://github.com/jaypdl",
  "followers_url": "https://api.github.com/users/jaypdl/followers",
  "following_url": "https://api.github.com/users/jaypdl/following{/other_user}",
  "gists_url": "https://api.github.com/users/jaypdl/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jaypdl/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jaypdl/subscriptions",
  "organizations_url": "https://api.github.com/users/jaypdl/orgs",
  "repos_url": "https://api.github.com/users/jaypdl/repos",
  "events_url": "https://api.github.com/users/jaypdl/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jaypdl/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jay Ponce de Leon",
  "company": null,
  "blog": "https://www.linkedin.com/in/jayponcedeleon/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I'm a Full-Stack Web Development student at Lambda School",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2016-07-22T17:22:18Z",
  "updated_at": "2020-10-21T21:42:17Z"
};

// console.log(cardMaker(testObj));




/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const entryPoint = document.querySelector('.cards');

// entryPoint.appendChild(cardMaker(testObj));

axios
  .get('https://api.github.com/users/jaypdl')
  .then(res => {
    entryPoint.appendChild(cardMaker(res.data));
  })
  .catch(err =>{
    console.log(`Uh Oh! ${err}`);
    debugger;
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach(user =>{
  axios
  .get(`https://api.github.com/users/${user}`)
  .then(res => {
    entryPoint.appendChild(cardMaker(res.data));
  })
  .catch(err =>{
    console.log(`Uh Oh! ${err}`);
    debugger;
  })
})



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
