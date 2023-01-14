

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