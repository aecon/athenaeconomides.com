# athenaeconomides.com
My personal website


## Setup (for myself)

Ruby is needed for Jekyll. Node is needed for Tailwind. At some point when the site is very mature and stable, I might get rid of Tailwind to reduce dependencies.

1. Install ruby using [rbenv](https://github.com/rbenv/rbenv). If you have issues with rbenv getting recognized in your terminal check [here](https://stackoverflow.com/questions/10940736/rbenv-not-changing-ruby-version)
  ```bash
  rbenv install
  ```

2. Install all the gem dependencies:
  ```
  bundle install
  ```
3. Install [nvm](https://github.com/nvm-sh/nvm).

4. Install node:
  ```bash
  nvm install node
  ```
5. Install all node dependencies:
  ```
  yarn install
  ```
6. Run using:
  ```bash
  bundle exec jekyll serve --livereload
  ```
