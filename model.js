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
        apps: [
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
    },


}