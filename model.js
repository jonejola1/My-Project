
let model = {
    //app
    app: {
        current_page: "",
        current_user: "",
    },

    //inputs 
    inputs: {
        login: {
            username: "",
            password: "",
        },

        registerUser: {
            username: "",
            email: "",
            password: "",
            confirm_password: "",
        }, 
    },

    //data
    data: {
        users: [
            {
                username: "admin",
                password: "admin",
                email: "admin@admin.com"
            },
            
            {
                username: "Davy10",
                password: 'Legend',
                email: "Davy10@admin.net"
            },
            
            {
                username: "Furtastic",
                password: "Carrots",
                email: "Furtastic@admin.no",
            },
        ],

        games: [
            {
                title: "Cookie Clicker",
                cost: "$4.99",
                ranking: "1",
                description: `Cookie Clicker is a game about making an absurd amount of cookies. 
                    To help you in this endeavor, you will recruit a wide variety of helpful cookie makers, 
                    like friendly Grandmas, Farms, Factories, and otherworldly Portals.
                `,

            },

            {
                title: "Bloons TD 6",
                cost: "$6.99",
                ranking: "2",
                description: ` Craft your perfect defense from a combination of 
                    awesome Monkey Towers, upgrades, Heroes and activated abilities, 
                    then pop every last invading bloon!
                
                `,
            },

            {
                title: "Geometry Dash",
                cost: "$1.99",
                ranking: "3",
                description: `Jump and Fly your way through danger 
                    in this rhythm-based action platformer.
                `,
            },

            {
                title: "Minecraft",
                cost: "$6.99",
                ranking: "4",
                description: `Explore infinite wrlds and build everything 
                    from teh simplest of homes to the gradest of castles. 
                    play in creative mode with unlimited resources or 
                    mine deep into the world in survival mode, 
                    crafting weapons and armout to fend off dangerous mobs.
                `,
            },
        ],

        apps: [
            {
                title: "Twitter",
                cost: "Free",
                ranking: "1",
                description: `Join the conversation!
                    Twitter is the go-to social media app and the 
                    new media source for what's happending in the world, 
                    straight from the accounts of the influential people 
                    who affect your world day-to-day.
                    `,
            },

            {
                title: "TikTok",
                cost: "Free",
                ranking: "2",
                description: `Discover videos from around the world 
                and create your own with easy-to-use tools to capture your life
                `,
            },

            {
                title: "Disney+",
                cost: "Free",
                ranking: "3",
                description: `Disney+ has something for everyone and every mood, all in one place. 
                With endless entertainment from Disney, Pixar, Marvel, Star Wars, National Geographic and Star, 
                there's always something exciting to watch. 
                Watch the latest realeses, Original series and movies, classic films, 
                throwbacks and so much more.`,
            },

            {
                title: "YouTube",
                cost: "Free",
                ranking: "4",
                description: `Get the officeial YouTube app on iPhoones and iPads. 
                See what the world is watching -- from the hottest music videos 
                to whats's popular in gaming, fashion, beauty, news, learning and more. 
                Subscribe to channels you love, create content of your own, 
                share with friends, and watch on any device.`,
            },
        ],
    },
}
