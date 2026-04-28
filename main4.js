function login_access() {

    let username = ('johnthecool012')
    let password = ('01022010')

    let requirement = [username, password];

    function authenthification() {

        for (let i = 0; i < requirement.length; i++) {

            for (let n = 1; n <= requirement[i] + 2; n++) {

            }

            alert('Authentification completed- Welcome ' + username + '!');
        }

    }
}

// credit to 50% of the coding that was taken from the internet: https://forum.freecodecamp.org/t/access-authentication-using-loop/382014,
// idk if I did it right OR what I'm doing.. T-T