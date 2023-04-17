export const msalConfig = {
    auth: {
        clientId: "00cdc6ac-5e5c-4bc1-b993-6bd6ef696157",
        authority: "https://login.microsoftonline.com/ae662b5b-163b-4542-9eac-363189053e87",
        redirectUri: window.location.origin
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};
