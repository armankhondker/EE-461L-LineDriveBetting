# EE-461L-LineDriveBetting
## Git Workflow Guide
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
