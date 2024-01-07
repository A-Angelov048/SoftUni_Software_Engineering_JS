function followers(data) {

    let infoFollowers = [];
    let i = 0;
    let command = data[i];
    i++;

    while (command !== 'Log out') {

        let [currentCommand, username, count] = command.split(': ');
        let findUserName = infoFollowers.find(n => n.username === username);

        switch (currentCommand) {

            case 'New follower':
                if (!findUserName) {
                    infoFollowers.push({ username, likes: 0, comments: 0 })
                }
                break;

            case 'Like':
                if (!findUserName) {
                    infoFollowers.push({ username, likes: Number(count), comments: 0 })
                } else {
                    findUserName.likes += Number(count)
                }
                break;

            case 'Comment':
                if (!findUserName) {
                    infoFollowers.push({ username, likes: 0, comments: 1 })
                } else {
                    findUserName.comments += 1
                }
                break;

            case 'Blocked':
                if (findUserName) {
                    let index = infoFollowers.indexOf(findUserName)
                    infoFollowers.splice(index, 1);
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
        command = data[i];
        i++;
    }

    console.log(`${infoFollowers.length} followers`);

    for (let el of infoFollowers) {

        if (el.likes > 0 && el.comments > 0) {
            console.log(`${el.username}: ${Number(el.likes) + Number(el.comments)}`);
        } else if (el.likes > 0) {
            console.log(`${el.username}: ${el.likes}`);
        } else if (el.comments > 0) {
            console.log(`${el.username}: ${el.comments}`);
        } else {
            console.log(`${el.username}: ${0}`);
        }
    }
}

followers(["Like: Katy: 3",

    "Comment: Katy",

    "New follower: Bob",

    "Blocked: Bob",

    "New follower: Amy",
    "New follower: Amy",

    

    "Log out"])