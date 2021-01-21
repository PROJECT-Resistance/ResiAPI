# ResiAPI

This is the new API for [Resi](https://lordvertice.hopto.org/LordVertice/resistance-bot), our Discord bot. Resi (and possibly other projects) can access this API to store important information about our members, in order to keep track of changing usernames and to connect a member's Discord username with their Minecraft UUID.

## Installation
1. Download the [source code](https://lordvertice.hopto.org/LordVertice/resi-api/-/archive/master/resi-api-master.zip) of this project.
2. Unzip the archive.
3. Download and install [Node.js](https://nodejs.org/en/)
4. Open terminal in the downloaded folder and run `npm ci --only=prod` to install the project's dependencies.
5. Download [this](https://mega.nz/file/qZFlGYrY#xfP3e13tLEEG6JW3eukQwINn0HvouzpDJaHOQ3RHV-4) template and move the file into the project folder. You should change `"username": "password"` to something secure.
6. Run `node .` to start the API server.

## Usage
Once the server us running, you can access the API under <http://localhost:3001/users>.


## Contributing
Merge requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact
Feel free to contact me on Discord by sending a friend request to "Lord Vertice#4078". You can also send an email to lordvertice333@gmail.com.

## License
This project is licensed under the **MIT License.** [Learn more](https://choosealicense.com/licenses/mit/)  

Copyright (c) 2021 Lord Vertice