# git 

## cheat sheet collection
* [git useful commands and advices ](http://najomi.org/git)

## useful links collection
* [complex search in github ui](https://docs.github.com/en/enterprise-server@3.3/search-github/searching-on-github/searching-issues-and-pull-requests)

### git autocomplete
```sh
# curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash
# .bashrc
if [ -f ~/.git-completion.bash ]; then
  export GIT_COMPLETION_CHECKOUT_NO_GUESS=0
  export GIT_COMPLETION_SHOW_ALL_COMMANDS=1
  export GIT_COMPLETION_SHOW_ALL=1
  source ~/.git-completion.bash
fi

```

### debug flag, verbose output of commands, output debug
```
export GIT_TRACE=1
export GIT_TRACE=1
export GIT_CURL_VERBOSE=1
```

### clean working tree remove untracked files
```sh
git clean --dry-run
git clean -f -d
```

```sh
# remove all remote non-used branches
git remote prune origin
```

### restore
```
git reset --hard
```

### restore local branch like remote one
```sh
git reset --hard origin/master
```

### restore local branch with saving all the work
```sh
# save work to staging
git reset --soft origin/master
# save work to working dir
git reset --mixed HEAD~2
```

### restore removed file, restore deleted file, find removed file, show removed file
```
# find full path to the file 
file_name="integration_test.sh.j2"
git log --diff-filter=D --name-only | grep $file_name

# find last log messages 
full_path="ansible/roles/data-ingestion/templates/integration_test.sh.j2"
git log -2 --name-only -- $full_path

second_log_commit="99994ccef3dbb86c713a44815ab5ffa"

# restore file from specific commit
git checkout $second_log_commit -- $full_path
# show removed file 
git show $second_log_commit:$full_path
```

### remove last commit and put HEAD to previous one
```
git reset --hard HEAD~1
```

### checkout with tracking
```
git checkout -t origin/develop
```

### new branch from stash
```sh
git stash branch $BRANCH_NAME stash@{3}
```

### show removed remotely
```
git remote prone origin
```

### delete local branch, remove branch, remove local branch
```sh
git branch -d release-6.9.0
git branch --delete release-6.9.0

# delete with force - for non-merged branches
git branch -D origin/release/2018.05.00.12-test
# the same as
git branch -d -f release-6.9.0
git branch --delete --force origin/release/2018.05.00.12-test
```

### delete remote branch, remove remote, remove remote branch
```sh
git push origin --delete release/2018.05.00.12-test
```

### remove branches, delete branches that exist locally only ( not remotely ), cleanup local repo
```sh
git gc --prune=now
git fetch --prune
```

### delete local branches that was(were) merged to master ( and not have 'in-progress' marker )
```sh
git branch --merged | egrep -v "(^\*|master|in-progress)" | xargs git branch -d
```

### remove commit, remove wrong commit
```sh
commit1=10141d299ac14cdadaca4dd586195309020
commit2=b6f2f57a82810948eeb4b7e7676e031a634 # should be removed and not important
commit3=be82bf6ad93c8154b68fe2199bc3e52dd69

current_branch=my_branch
current_branch_ghost=my_branch_2

git checkout $commit1
git checkout -b $current_branch_ghost
git cherry-pick $commit3
git push --force origin HEAD:$current_branch
git reset --hard origin/$current_branch
git branch -d $current_branch_ghost
```

### squash commit replace batch of commits 
[interactive rebase](https://garrytrinder.github.io/2020/03/squashing-commits-using-interactive-rebase)  
```sh
git checkout my_branch
# take a look into your local changes, for instance we are going to squeeze 4 commits
git reset --soft HEAD~4
# in case of having external changes and compress commits: git rebase --interactive HEAD~4

git commit # your files should be staged before
git push --force-with-lease origin my_branch
```

### check hash-code of the branch, show commit hash code 
```sh
git rev-parse "remotes/origin/release-6.0.0"
```

### print current hashcode commit hash last commit hash
```sh
git rev-parse HEAD
git log -n 1 --pretty=format:'%h' > /tmp/gitHash.txt
```

### print branch name by hashcode to branch name show named branches branchname find branch by hash
```sh
git ls-remote | grep <hashcode>
# answer will be like:          <hashcode>        <branch name>
# ada7648394793cfd781038f88993a5d533d4cdfdf        refs/heads/release-dataapi-13.0.2
```
or
```sh
git branch --all --contains ada764839
```

### print branch hash code by name branch hash branch head hash
```sh
git rev-parse remotes/origin/release-data-api-13.3
```

### check all branches for certain commit ( is commit in branch, is branch contains commit ), commit include in 
```sh
git branch --all --contains 0ff27c79738a6ed718baae3e18c74ba87f16a314
git branch --all --merged 0ff27c79738a6ed718baae3e18c74ba87f16a314
# if branch in another branch
git branch --all --contains | grep {name-of-the-branch}
```

### is commit included in another, commit before, commit after, if commit in branch
```sh
git merge-base --is-ancestor <commit_or_branch> <is_commit_in_branch>; if [[ 1 -eq "$?" ]]; then echo "NOT included"; else echo "included"; fi
```

### check log by hash, message by hash
```sh
git log -1 0ff27c79738a6ed718baae3e18c74ba87f16a314
```

### check last commits for specific branch, last commits in branch
```sh
git log -5 develop
```

### check last commits for subfolder, check last commits for author, last commit in folder
```sh
git log -10 --author "Frank Newman" -- my-sub-folder-in-repo
```

### log pretty print log oneline
```sh
git relog -5
```

### check files only for last commits
```sh
git log -5 develop --name-only
```
### check last commits by author, commits from all branches
```
git log -10 --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset%n' --all --author "Cherkashyn"
```
### list of authors, list of users, list of all users
```sh
git shortlog -sne --all
```
### list of files by author, list changed files
```bash
git whatchanged --author="Cherkashyn" --name-only 
```
### often changes by author, log files log with files
```bash
git log --author="Cherkashyn" --name-status --diff-filter=M | grep "^M" | sort | uniq -c | sort -rh
```
### commit show files, files by commit
```sh
git diff-tree --no-commit-id --name-only -r ec3772
```
### commit diff, show changes by commit, commit changes 
```sh
git diff ec3772~ ec3772
```

### pretty log with tree
```sh
git log --all --graph --decorate --oneline --simplify-by-decoration
```

### git log message search commit message search commit search message
```sh
git log | grep -i jwt

git log --all --grep='jwt'
git log --name-only  --grep='XVIZ instance'
git log -g --grep='jwt'
```

### show no merged branches
```
git branch --no-merged
```

### show branches with commits
```sh
git show-branch
git show-branch -r
```

### checkout branch locally and track it
```
git checkout -t remotes/origin/release
```

### copy file from another branch
```
git checkout experiment -- deployment/connection_pool.py                                 
git checkout origin/develop datastorage/mysql/scripts/_write_ddl.sh
# print to stdout
git show origin/develop:datastorage/mysql/scripts/_write_ddl.sh > _write_ddl.sh
```

### git add 
```sh
git add --patch
git add --interactive
```

### git mark file unchanged skip file
```sh
git update-index --assume-unchanged path/to/file
```

### set username, global settings
```sh
git config --global user.name "vitalii cherkashyn"
git config --global user.email vitalii.cherkashyn@wirecard.de
git config --global --list
```
or
```properties
# git config --global --edit
[user]
   name=Vitalii Cherkashyn
   email=vitalii.cherkashyn@bmw.de
```

### default editor, set editor
```sh
git config --global core.editor "vim"
```

### avoid to enter login/password
```
git config --global credential.helper store
```

### revert all previous changes with "credential.helper"
```sh
git config --system --unset credential.helper
git config --global --unset credential.helper
```

### git config mergetool
```sh
git config --global merge.tool meld
git config --global mergetool.meld.path /usr/bin/meld
```

### show all branches merged into specified
```sh
git branch --all --merged "release" --verbose
git branch --all --no-merged "release" --verbose
git branch -vv
```

### difference between two commits ( diff between branches )
```sh
git diff --name-status develop release-6.0.0
git cherry develop release-6.0.0
```

### difference between branches for file ( diff between branches, compare branches )
```sh
git diff develop..master -- myfile.cs
```
github difference between two branches
https://github.com/cherkavi/management/compare/release-4.0.6...release-4.0.7

### difference between branch and current file ( compare file with file in branch )
```sh
git diff master -- myfile.cs
```

### difference between commited and staged
```
git diff --staged
```

### difference between two branches, list of commits list commits, messages list of messages between two commits
```sh
git rev-list master..search-client-solr
# by author
git rev-list --author="Vitalii Cherkashyn" item-598233..item-530201
# list of files that were changed
git show --name-only --oneline `git rev-list --author="Vitalii Cherkashyn" item-598233..item-530201`
#  list of commits between two branches 
git show --name-only --oneline `git rev-list d3ef784e62fdac97528a9f458b2e583ceee0ba3d..eec5683ed0fa5c16e930cd7579e32fc0af268191`
```

#### list of commits between two tags
```sh
# git tag --list
start_tag='1.0.13'
end_tag='1.1.2'
start_commit=$(git show-ref --hash $start_tag )
end_commit=$(git show-ref --hash $end_tag )
git show --name-only --oneline `git rev-list $start_commit..$end_commit`
```

#### all commits from tag till now
```sh
start_tag='1.1.2'
start_commit=$(git show-ref --hash $start_tag )
end_commit=$(git log -n 1 --pretty=format:'%H')
git show --name-only --oneline `git rev-list $start_commit..$end_commit`
```

### difference for log changes, diff log, log diff
```
git log -1 --patch 
git log -1 --patch -- path/to/controller_email.py
```

### copying from another branch, copy file branch
```
branch_source="master"
branch_dest="feature-2121"
file_name="src/libs/service/message_encoding.py"

# check
git diff $branch_dest..$branch_source $file_name
# apply 
git checkout $branch_source -- $file_name
# check 
git diff $branch_source $file_name

```
### tags
#### create tag 
```
git tag -a $newVersion -m 'deployment_jenkins_job' 
```
#### push tags only 
```
git push --tags $remoteUrl
```
#### show tags
```
# show current tags show tags for current commit
git show
git describe --tags
git describe


# fetch tags
git fetch --all --tags -prune

# list of all tags list tag list
git tag
git tag --list
git show-ref --tags

# tag checkout tag
git tags/1.0.13
```
#### show tag hash
```
git show-ref -s 1.1.2
```

#### remove tag delete tag delete
```sh
# remove remote
git push --delete origin 1.1.0
git push origin :refs/tags/1.1.0
git fetch --all --tags -prune

# or remove remote
git push --delete origin 1.2.1

# remove local 
git tag -d 1.1.0
git push origin :refs/tags/1.1.0
```

### conflict files, show conflicts
```sh
git diff --name-only --diff-filter=U
```

### conflict file apply remote changes
```sh
git checkout --theirs path/to/file
```

### git fetch
```sh
git fetch --all --prune
```

### find by comment
```
git log --all --grep "BCM-642"
```

### find by diff source, find through all text changes in repo
```
git grep '^test$'
```

### current comment
```
git rev-parse HEAD
```

### find file into log
```
git log --all -- "**db-update.py"
git log --all -- db-scripts/src/main/python/db-diff/db-update.py
```

### history of file, file changes file authors file log file history file versions
```sh
git log path/to/file
git log -p -- path/to/file
```

### files in commit
```
git diff-tree --no-commit-id --name-only -r 6dee1f44f56cdaa673bbfc3a76213dec48ecc983
```

### difference between current state and remote branch
```
git fetch --all
git diff HEAD..origin/develop
```

### show changes into file only
```
git show 143243a3754c51b16c24a2edcac4bcb32cf0a37d -- db-scripts/src/main/python/db-diff/db-update.py
```

### show changes by commit, commit changes
```
git diff {hash}~ {hash}
```

### git cherry pick without commit, just copy changes from another branch
```
git cherry-pick -n {commit-hash}
```

### git cherry pick with original commit message cherry pick tracking cherry pick original hash
```
git cherry-pick -x <commit hash>
```

### git cherry pick, git cherry-pick conflict
```sh
# in case of merge conflict during cherry-pick
git cherry-pick --continue
git cherry-pick --abort
git cherry-pick --skip
# !!! don't use "git commit" 
```

### git new branch from detached head
```sh
git checkout <hash code>
git cherry-pick <hash code2>
git switch -c <new branch name>
```

### git revert commit
```
git revert <commit>
```

### git revert message for commit
```
git commit --amend -m "<new message>"
```

### git show author of the commit, log commit, show commits only
```
git log --pretty=format:"%h - %an, %ar : %s" <commit SHA> -1
```

### show author, blame, annotation, line editor, show editor
```
git blame path/to/file
git blame path/to/file | grep search_line
```

### git into different repository, different folder, another folder, not current directory
```
git --git-dir=C:\project\horus\.git  --work-tree=C:\project\horus  branch --all
```
```sh
find . -name ".git" -maxdepth 2 | while read each_file
do
   echo $each_file
   git --git-dir=$each_file --work-tree=`dirname $each_file` status
done
```

### show remote url
```
git remote -v
git ls-remote 
git ls-remote --heads
```

### [git chain of repositories](https://github.com/cherkavi/solutions/tree/master/git-repo-chain)

### connect to existing repo
```sh
PATH_TO_FOLDER=/home/projects/bash-example

# remote set
git remote add local-hdd file://${PATH_TO_FOLDER}/.git
# commit all files 
git add *; git commit --message 'add all files to git'

# set tracking branch
git branch --set-upstream-to=local-hdd/master master

# avoid to have "refusing to merge unrelated histories"
git fetch --all
git merge master --allow-unrelated-histories
# merge all conflicts
# in original folder move to another branch for avoiding: branch is currently checked out
git push local-hdd HEAD:master

# go to origin folder
cd $PATH_TO_FOLDER
git reset --soft origin/master 
git diff 
```

### using authentication token personal access token, git remote set, git set remote
example of using github.com
```sh
# Settings -> Developer settings -> Personal access tokens
# https://github.com/settings/apps
git remote set-url origin https://$GIT_TOKEN@github.com/cherkavi/python-utilitites.git

# in case of Error: no such remote 
git remote add origin https://$GIT_TOKEN@github.com/cherkavi/python-utilitites.git

# in case of asking username & password - check URL, https prefix, name of the repo.... 
```

remove old password-access approach
```sh
git remote set-url --delete origin https://github.com/cherkavi/python-utilitites.git
```

### change remote url
```
git remote set-url origin git@cc-github.my-network.net:adp/data-management.git
```

### git clone via https
```sh
# username - token
# password - empty string
git clone               https://$GIT_TOKEN@cc-github.group.net/swh/management.git
git clone        https://oauth2:$GIT_TOKEN@cc-github.group.net/swh/management.git
git clone https://$GIT_TOKEN:x-oauth-basic@cc-github.group.net/swh/management.git
```

### git push via ssh git ssh
```sh
git commmit -am 'hello my commit message'
GIT_SSH_COMMAND="ssh -i $key"
git push
```

### issue with removing files, issue with restoring files, can't restore file, can't remove file
```
git rm --cached -r .
git reset --hard origin/master
```

### clone operation under the hood
if during the access ( clone, pull ) issue appear:
```
fatal: unable to access 'http://localhost:3000/vitalii/sensor-yaml.git/': The requested URL returned error: 407
```
or
```
fatal: unable to access 'http://localhost:3000/vitalii/sensor-yaml.git/': The requested URL returned error: 503
```
use next command to 'simulate' cloning
```
git clone http://localhost:3000/vitalii/sensor-yaml.git
< equals >
wget http://localhost:3000/vitalii/sensor-yaml.git/info/refs?service=git-upload-pack
```

### clone only files without history, download code
```
git clone --depth 1 https://github.com/kubernetes/minikube
```

### download single file from repo
```
git archive --remote=ssh://https://github.com/cherkavi/cheat-sheet HEAD jenkins.md
```

### update remote branches, when you see not existing remote branches
```
git remote update origin --prune
```

### worktree
> worktree it is a hard copy of existing repository but in another folder
> all worktrees are connected
```sh
# list of all existing wortrees
git worktree list

# add new worktree list
git worktree add $PATH_TO_WORKTREE $EXISTING_BRANCH

# add new worktree with checkout to new branch
git worktree add -b $BRANCH_NEW $PATH_TO_WORKTREE

# remove existing worktree, remove link from repo
git worktree remove $PATH_TO_WORKTREE
git worktree prune
```


### git lfs
[package update](https://packagecloud.io/github/git-lfs/install)
```sh
echo 'deb http://http.debian.net/debian wheezy-backports main' > /etc/apt/sources.list.d/wheezy-backports-main.list
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
```
tool installation
```sh
sudo apt-get install git-lfs
git lfs install
git lfs pull
```
if you are using SSH access to git, you should specify http credentials ( lfs is using http access ), to avoid possible errors: "Service Unavailable...", "Smudge error...", "Error downloading object"
```bash
git config --global credential.helper store
```
file .gitconfig will have next section
```
[credential]
        helper = store
```
file ~/.git-credentials ( default from previous command ) should contains your http(s) credentials
```file:~/.git-credentials
https://username:userpass@aa-github.mygroup.net
https://username:userpass@aa-artifactory.mygroup.ne
```

#### git lfs proxy
be aware about upper case for environment variables 
```
NO_PROXY=localhost,127.0.0.1,.localdomain,.advantage.org
HTTP_PROXY=muc.proxy
HTTPS_PROXY=muc.proxy
```

#### issue with git lfs
```
Encountered 1 file(s) that should have been pointers, but weren't:
```
```
git lfs migrate import --no-rewrite path-to-file
```

#### git lfs add file
```sh
git lfs track "*.psd"
```
check tracking changes in file:
```sh
git add .gitattributes
```

### create local repo in filesystem
```sh
# create bare repo file:///home/projects/bmw/temp/repo
# for avoiding: error: failed to push some refs to 
mkdir /home/projects/bmw/temp/repo
cd /home/projects/bmw/temp/repo
git init --bare
# or git config --bool core.bare true

# clone to copy #1
mkdir /home/projects/bmw/temp/repo2
cd /home/projects/bmw/temp/repo2
git clone file:///home/projects/bmw/temp/repo

# clone to copy #1
mkdir /home/projects/bmw/temp/repo3
cd /home/projects/bmw/temp/repo3
git clone file:///home/projects/bmw/temp/repo
```

### configuration for proxy server, proxy configuration
#### set proxy, using proxy
```sh
git config --global http.proxy 139.7.95.74:8080
# proxy settings
git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
git config --global https.proxy 139.7.95.74:8080
```

#### check proxy, get proxy
```sh
git config --global --get http.proxy
```
#### remove proxy configuration, unset proxy
```sh
git config --global --unset http.proxy
```

### using additional command before 'fetch' 'push', custom fetch/push
```
# remote: 'receive.denyCurrentBranch' configuration variable to 'refuse'.
git config core.sshCommand 'ssh -i private_key_file'
```

### set configuration
```sh
git config --local receive.denyCurrentBranch updateInstead
```

### remove auto replacing CRLF for LF on Windows OS
.gitattributes
```
*.sh -crlf
```

### download latest release from github, release download
```
curl -s https://api.github.com/repos/bugy/script-server/releases/latest | grep browser_download_url | cut -d '"' -f 4
```

### download last version of file from github, url to source, source download
```
wget https://raw.githubusercontent.com/cherkavi/cheat-sheet/master/git.md
```

### linux command line changes
```
#git settings parse_git_branch() {
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\[\033[32m\]\W\[\033[33m\]\$(parse_git_branch)\[\033[00m\] $ "​
```

### ignore tracked file, ignore changes
```
git update-index --assume-unchanged .idea/vcs.xml
```

## hooks
### check commit message
```
mv .git/hooks/commit-msg.sample .git/hooks/commit-msg
```
```
result=`cat $1 | grep "^check-commit"`

if [ "$result" != "" ]; then
	exit 0
else 
	echo "message should start from 'check-commit'"
	exit 1
fi
```
if you want to commit hooks, then create separate folder and put all files there
```
git --git-dir $DIR_PROJECT/integration-prototype/.git config core.hooksPath $DIR_PROJECT/integration-prototype/.git_hooks
```

### git template message template
```
git --git-dir $DIR_PROJECT/integration-prototype/.git config commit.template $DIR_PROJECT/integration-prototype/.commit.template
```

## [git lint](https://jorisroovers.com/gitlint/)
```sh
pip install gitlint
gitlint install-hook
```
.gitlint
```properties
# See http://jorisroovers.github.io/gitlint/rules/ for a full description.
[general]
ignore=T3,T5,B1,B5,B7
[title-match-regex]
regex=^[A-Z].{0,71}[^?!.,:; ]
```


## advices
### fix commit to wrong branch
![fix wrong branch commit](https://i.postimg.cc/TYVLR89Y/git-wrong-branch-commit.png)



## git rest api 
export PAT=07f1798524d6f79...
export GIT_USER=tech_user
export GIT_USER2=another_user
export GIT_REPO=system_description
export GIT_URL=https://github.sbbgroup.zur


[git rest api](https://docs.github.com/en/enterprise-server@3.1/rest)  
[git endpoints](https://docs.github.com/en/enterprise-server@3.1/rest/overview/endpoints-available-for-github-apps)  
```sh
# read user's data 
curl -H "Authorization: token ${PAT}" ${GIT_URL}/api/v3/users/${GIT_USER}
curl -u ${GIT_USER}:${PAT} ${GIT_URL}/api/v3/users/${GIT_USER2}

# list of repositories 
curl -u ${GIT_USER}:${PAT} ${GIT_URL}/api/v3/users/${GIT_USER2}/repos | grep html_url

# read repository
curl -u ${GIT_USER}:${PAT} ${GIT_URL}/api/v3/repos/${GIT_USER2}/${GIT_REPO}
curl -H "Authorization: token ${PAT}" ${GIT_URL}/api/v3/repos/${GIT_USER2}/${GIT_REPO}


# read path
export FILE_PATH=doc/README
curl -u ${GIT_USER}:${PAT} ${GIT_URL}/api/v3/repos/${GIT_USER2}/${GIT_REPO}/contents/${FILE_PATH}
curl -u ${GIT_USER}:${PAT} ${GIT_URL}/api/v3/repos/${GIT_USER2}/${GIT_REPO}/contents/${FILE_PATH} | jq .download_url

# https://docs.github.com/en/enterprise-server@3.1/rest/reference/repos#contents
# read content
DOWNLOAD_URL=`curl -u ${GIT_USER}:${PAT} ${GIT_URL}/api/v3/repos/${GIT_USER2}/${GIT_REPO}/contents/${FILE_PATH} | jq .download_url | tr '"' ' '`
echo $DOWNLOAD_URL 
curl -u ${GIT_USER}:${PAT} -X GET $DOWNLOAD_URL

# read content
curl -u ${GIT_USER}:${PAT} ${GIT_URL}/api/v3/repos/${GIT_USER2}/${GIT_REPO}/contents/${FILE_PATH} | jq -r ".content" | base64 --decode

```
