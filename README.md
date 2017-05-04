[![GitHub release](https://img.shields.io/github/release/QzSG/bluemix-ghost-cloudinary.svg?style=flat-square)](https://github.com/QzSG/bluemix-ghost-cloudinary/releases)
[![Ghost Version](https://img.shields.io/badge/ghost-0.11.8-brightgreen.svg?maxAge=2592000&style=flat-square)](https://github.com/TryGhost/Ghost)
[![Node Version](https://img.shields.io/badge/node-^4.5-brightgreen.svg?maxAge=2592000&style=flat-square)](https://nodejs.org/en/)
[![Travis for Ghost](https://img.shields.io/travis/TryGhost/Ghost/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/TryGhost/Ghost)
[![David dependencies checker](https://img.shields.io/david/QzSG/bluemix-ghost-cloudinary.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/QzSG/bluemix-ghost-cloudinary)
[![MIT license](https://img.shields.io/github/license/QzSG/bluemix-ghost-cloudinary.svg?maxAge=2592000&style=flat-square)](https://github.com/QzSG/bluemix-ghost-cloudinary/blob/master/LICENSE)

<img src="https://cloud.githubusercontent.com/assets/120485/6622822/c4c639fe-c8e7-11e4-9e64-5bec06c8b4c3.png" alt="Ghost" />

![Ghost Screenshot](https://cloud.githubusercontent.com/assets/120485/6626466/6dae46b2-c8ff-11e4-8c7c-8dd63b215f7b.jpg)

![Ghost is a simple, powerful publishing platform that allows you to share your stories with the world.](https://cloud.githubusercontent.com/assets/120485/6626501/b2bb072c-c8ff-11e4-8e1a-2e78e68fd5c3.png)

The project is maintained by a non-profit organisation called the **Ghost Foundation**, along with an amazing group of independent [contributors](https://github.com/TryGhost/Ghost/contributors). We're trying to make publishing software that changes the shape of online journalism.

- [Visit Ghost.org for more details](https://ghost.org)

# Quick Start Install

Make sure you've installed Node.js - I recommend the latest **Node v4 LTS** release. For other supported versions [click here](http://support.ghost.org/supported-node-versions/). 

Install Node.js (if you haven't done so) 

Ghost currently supports Node versions 0.12.x, 4.2+ and 6.9+ only.

Clone :ghost:

```bash
git clone git://github.com/qzsg/bluemix-ghost-cloudinary.git ghost-blog
cd ghost-blog
```

Install Ghost and dependencies

```bash
npm install
```

Start your engines.

```bash
npm start

## running production? Add --production
```

Congrats! You made it. Visit your local Ghost blog at `http://localhost:2368/` :tada:

# Developer Install (from git)

Install Node.js. (See [Supported Node.js versions](http://support.ghost.org/supported-node-versions/))


# Deploying Ghost on BlueMix

![Ghost + BlueMix](http://i.imgur.com/vNrQ3PD.jpg?1)

<a href="https://bluemix.net/deploy?repository=https://github.com/QzSG/bluemix-ghost-cloudinary"><img src="https://bluemix.net/deploy/button.svg" alt="Deploy to Bluemix" width="300px"/></a>

### Storage: Using [Cloudinary](http://cloudinary.com/) to store files

1. After you have created an account at Cloudinary
2. Uncomment the Cloudinary configuration inside config.js
3. Create an environment variable containing your cloudinary credentials which can be found at [Cloudinary Console](https://cloudinary.com/console), in the format of: `cf set-env ghost CLOUDINARY '{"cloud_name":"...", "api_key":"...", "api_secret":"..."}'`
4. Push update and restart ghost `cf push`



# Helpful references
- [TryGhost/Ghost](https://github.com/TryGhost/Ghost)
- [sethbrasile/ghost-cloudinary-store](https://github.com/sethbrasile/ghost-cloudinary-store)
- [ibmjstart/bluemix-ghost-js](https://github.com/ibmjstart/bluemix-ghost-js)

# Copyright & License

Copyright (c) QzSG - Released under the [MIT license](LICENSE).
