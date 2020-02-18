const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl: 'https://instagram.fsjo9-1.fna.fbcdn.net/vp/d4728e507fe1eb2895fb7ca394bb6431/5E4122B1/t51.2885-15/s150x150/71118783_2434459423505735_6295784028176668008_n.jpg?_nc_ht=instagram.fsjo9-1.fna.fbcdn.net',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just delicious coffees to offer at our shops!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            }
        ]
    },
    {
        username: "xelayz_yt",
        thumbnailUrl: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/s150x150/80303825_2938626842838040_366147465222553600_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=Z0qbhAPtybMAX__Sp1n&oh=2592645d78ea0d3a2a1630b9c6127914&oe=5ED6D0DA',
        imageUrl: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/82667620_865694620555153_1686094257462021236_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=9hDclUkpatsAX97lUQ7&oh=f705034b6164e9c49f142d1aedad0a59&oe=5E3B6BA7',
        likes: 418,
        timestamp: "February 4th 2020, 03:12:09 pm",
        comments: [
            {
                username: "xelayz_yt",
                text: "Just a filler, who else misses old fortnite? | new big posts coming soon"
            },
            {
                username: "tbg.knockerz",
                text: "😓"
            },
            {
                username: "tbg_snipegod",
                text: "I felt that one"
            },
            {
                username: "tbg.knockerz",
                text: "😱"
            }
        ]
    },
    {
        username: "gfuelenergy",
        thumbnailUrl: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/s150x150/79246428_474197766603982_848755657325674496_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=k68cjT-0Wt0AX-bf2PX&oh=366925a5085102ffa8363ab258ddb17d&oe=5EB77DDE',
        imageUrl: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/82620209_169296181165694_3004037382588306423_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=g8ZWCKHqXboAX-a_33E&oh=1c9cd0682faf9b6ed28b128016a48ab9&oe=5ED69E4F',
        likes: 11107,
        timestamp: "February 3rd 2017, 03:12:09 pm",
        comments: [
            {
                username: "gfuelenergy",
                text: "This box of #GFUEL shows up on your doorstep. Your 3rd most used emoji is your reaction: 📦👇"
            },
            {
                username: "gfuelenergy",
                text: "CR: @chloedonald 🔥"
            },
            {
                username: "real_jude_legacy",
                text: "🔥🔥🔥"
            },
            {
                username: "vova.sakaev",
                text: "😻"
            }
        ]
    },
    {
        username: "forrnite",
        thumbnailUrl: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/s150x150/66448042_2242667475831809_6171290198106701824_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=AZdmkVUkRCMAX_C2GdP&oh=5d19960b1bf43c159ea91cc3fe55419b&oe=5EBB95D2',
        imageUrl: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/83885861_852326115218055_8896559348411238166_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=BBHVTc6mQD4AX8Spl_e&oh=6abe06fe6b817fbb12414e9e7b3fd113&oe=5ED0CF0A',
        likes: 14820,
        timestamp: "February 3rd 2020, 03:12:09 pm",
        comments: [
            {
                username: "forrnite",
                text: "Should Xbox Players Get More FREE Exclusive Skins Like PS4 Players? 🧐👇 (via/itsarkheops)"
            },
            {
                username: "mrsavages.ig",
                text: "They should🔥"
            },
            {
                username: "grace_mayers24",
                text: "Nah"
            },
            {
                username: "thibo4092",
                text: "Nah Xbox don’t deserve it"
            }
        ]
    }
];

export default dummyData;
