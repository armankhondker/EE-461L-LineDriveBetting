# LineDriveBetting - Documentation 

# About

The vision for LineDriveBetting is to provide both an aggregated betting analytics platform that provides bettors nationwide with moneyline and point spreads from the most popular websites, as well as a reddit-like blog forum to have intellectual conversations about betting lines.

LineDriveBetting aims to target all bettors and sports enthusiasts. By providing a single hub for all necessary betting data of their desired team as well as a discussion forum, there are numerous use cases. Bettors who are looking for opportune bets benefit from the display of information of different betting websites, sports fan’s interested in aggregated data of win predictions for their favorite teams, and people looking to argue about why they think a certain team will win all benefit from LineDriveBetting’s platform.

# Technolgies Used

* React: Front End Javascript Framework
* Node.js: Back End Javascript Framework 
* Github API: User stats dynamically pulled from Github.com
* Amazon Web Services: Hosting of web applicaiton
* Python: Backend webscraping
* MongoDB: Database to store our scrapping data
* Namecheap: Purchase linedrivebetting domain


# Development Team 

* **Arman Khondker** - *Fullstack Development*
* **Rohan Garg** - *Back-end Development*
* **Josh Papermaster** - *Fullstack Development*
* **Punit Patel** - *Front-end Development*
* **Thienson Ho** - *Fullstack Development*
* **Zach Herink** - *Back-end Development*





# Git Workflow Guide
### Rules
1. Anything in the master branch is always deployable meaning it is fully functional and tested
2. Don't work on or push directly to master 
3. The dev branch will be used for normal development
4. Any feature must be developed on a feature branch that is branched from dev

### Create a new branch and track it remotely
1. `git checkout {source branch}`
2. `git pull` to update
3. `git checkout -b {new branch name}`
4. `git push --set-upstream origin {new branch name}`

### Pull Requests
1. Go on github.com and make a pull request. You should see your commits there after pushing
2. Add reviewers if appropriate
3. Merge your changes (It's good practice to have others review and merge your pull request and not yourself)

### Issues
For any features that need to be developed do the following:
1. Create a issue with the naming convention as "Phase X: YOUR ISSUE HERE" on the issues board and assign yourself the issue
2. Add approriate reviewers
3. Add an approriate tag
4. Refer to this issue by using the #X tag (where X is your issue number) so it gets linked to the issue
5. Close issues when you have implemented the feature and had a pull request approved and merged into master 
