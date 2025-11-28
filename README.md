# Moonex

> Checkout live site [Here](https://moonex.unknownbug.tech)

## TechStack

- **NextJs** : Used NextJS as it follows serverless architecture which is sufficient for This assignment
- **TailwindCSS** : used tailwindcss for the styling as it is good for fast prototyping/development
- **DummyJSON** : For public API fetching posts data using it , used this as it provides comprehensive set of queries to perform on the dummy data
- **Axios** : For HTTP requests to the DummyJSON API
- **Lucide React** : For icons throughout the application
- **Vercel** : For deployment of app

## Setup Guide

First of all clone this repo in your `machine` and open terminal in root of this project

Configure `.env` file with

```bash
API_URL="http://localhost:3000" #URL on which you are running your app
```

### How to run `Locally`

Run following commands

```bash
pnpm install
or
npm install
```

and then

```bash
pnpm run dev
or
npm run dev
```

### How to build

Run following commands

```bash
pnpm install
or
npm install
```

and then

```bash
pnpm run build
or
npm run build
```

## Known Trade-Offs and Future Improvements

- Background gradients and patterns aren't clear and few are not positioned in pixel perfect manner
- **Improvement** : In future can solve this by exporting these patterns and gradients from this `Figma` Design and use them properly
- And not able to get Font Family so using that I felt closest
- No Caching as DummyJSON was quite fast
- Right now it does not supports sorting of `Posts` according to the `Reactions`
- **Improvement** : In future might create a comprehensive algorithm to fetch all posts and then manually sort them according to reactions when required
- Same goes for `sorting` According to the `post tags`
- As of now testing is not done as it has only one main method to call and it's about fetching `Posts` from the `DummyJSON API`

## Attributions

- Used DummyJSON endpoint : [posts](https://dummyjson.com/posts/)
- Icons for `Telegram`, `Twitter` and `Reddit` is downloaded from [Icons8](https://icons8.com/)
