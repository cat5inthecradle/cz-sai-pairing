# cz-sai-pairing

Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for SAI Pairing message requirements.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Usage

### Commitizen Workstation Setup

See the [Commitizen Readme](https://github.com/commitizen/cz-cli) for up-to-date information. Installation should be as simple as running the following command (add sudo if on OSX/Linux):

```
npm install -g commitizen
```

Now, simply use `git cz` instead of `git commit` when committing. 

When you're working in a Commitizen friendly repository, you'll be prompted to fill in any required fields and your commit messages will be formatted according to the the standards defined by project maintainers. 

If you're not working in a Commitizen friendly repository, then `git cz` will work just the same as `git commit`.

## Repository Setup

First, install the Commitizen cli tools:

```
npm install commitizen -g
```

Next, initialize your project to use the cz-conventional-changelog adapter by typing:

```
commitizen init cz-sai-pairing --save --save-exact
```

Note that if you want to force install over the top of an old adapter, you can apply the `--force` argument. For more information on this, just run `commitizen help`.

The above command does three things for you. It installs this cz-sai-pairing adapter npm module, it saves it to the package.json's dependencies or devDependencies, and lastly it  add the `config.commitizen` key to the root of your **package.json** as shown here:

```json
...
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
```

This just tells Commitizen which adapter we actually want our contributors to use when they try to commit to this repo.

## Dependencies

* [git-branch](https://www.npmjs.com/package/git-branch)
 
Dev Dependencies

* [commitizen](https://github.com/commitizen/cz-cli)
