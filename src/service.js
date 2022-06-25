
const service = {
    load: function () {
        return fetch("http://localhost:3500/posts")
            .then(res => res.json());
    }
}

export default service