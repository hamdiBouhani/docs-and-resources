

# ~/.gitconfig

```
# This is Git's per-user configuration file.
[core]
        autocrlf = input
[url "ssh://git@gitlab.com/"]
        insteadOf = https://gitlab.com/
[url "ssh://git@github.com/"]
        insteadOf = https://github.com/
[user]
	name = userName
	email = example@test.com
```


# skip ci

```
git commit -m "[skip-ci]”
```

# remove git

rm -fr .git


# fix conflict
```shell

   git pull
   git checkout feat/add-gar-clear-for-multiple-project
   git merge develop
   git add .
   git status
   git commit -m "merge dev"
   git push
```


```
git checkout master			# master is checked out
git pull					# update local
git merge new-feature		# merge branch new-feature into master
git push
```