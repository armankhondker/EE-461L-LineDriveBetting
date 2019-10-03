# EE-461L-LineDriveBetting
## Git Workflow Guide
### Rules
1. Anything in the master branch is always deployable meaning it is fully functional and tested
2. Don't work on or push directly to master 
3. The dev branch will be used for normal development
4. Any feature must be developed on a feature branch that is branched from dev

### Quickstart
1. Create a new feature branch from dev on github.com
2. Use `git branch -a` to view all branches and to make sure your new feature branch exists
3. Then for example use `git checkout --track remotes/origin/landingpage` to checkout a local branch that is tracking the remote branch you just made
4. Make changes using `git add` and `git commit -m` normally
5. Once your done `git push` 
6. Now go on github.com and make a pull request. You should see your commits there after pushing
7. Add reviewers if appropriate
8. Merge your changes (It's good practice to have others review and merge your pull request and not yourself)
