# simple-callback
simple-callback repository is a Proof-Of-Concept Node module to demonstrate Supply Chain attacks.

## Publish

```
npm login
# at the project directory
npm publish
```

## Deployment - On Victim

View the published package: https://www.npmjs.com/package/simple-callback-supply-chain-attack

To simplify testing, the callback domain is taken from the enviornment variable

```
export CALLBACK=[SOME-DOMAIN]
npm install simple-callback-supply-chain-attack
```