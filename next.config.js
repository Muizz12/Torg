module.exports = {
    images: {
        domains: ["public/Images"],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
};