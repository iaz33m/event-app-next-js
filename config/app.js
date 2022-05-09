export default {
    env:"staging",
    host: "https://www.ryoulive.com",
    environments: {
        staging: {
            apiHost:"staging-api.ryou.live",
            assetsPath: "//cdn.ryou.live/website.ryou.live"
        },
        demo:{
            apiHost:"demo-api.ryou.live",
            assetsPath: "//cdn.ryou.live/website.ryou.live"
        },
        prod: {
            apiHost:"api.ryou.live",
            assetsPath: "//cdn.ryou.live/wl-assets"
        },
        local: {
            apiHost:"api.ryou.live",
            assetsPath: "//cdn.ryou.live/website.ryou.live"
        },
    }
};