let app = Vue.createApp({
    data() {
        return {
            albums: [
                {
                    title: "Liquid Swords",
                    artist: "GZA",
                },
            ],
            genres: [
                "Hip-hop",
                "Dubstep",
                "Salsa",
                "RnB",
                "Techno",
                "Drum and Bass",
            ],
        };
    },
    methods: {
        addAlbum() {
            this.albums.push({ title: "Untitled", artist: "Untitled" });
        },
        removeAlbum(album) {
            this.album.splice(this.albums.indexOf(album), 1);
        },
    },
});

app.mount('#app');