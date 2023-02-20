#!/bin/bash

#   In order to know if something changed when there are multiple commits, you need to have a base commit/sha to compare to (called merge base). 
#   You could assume all changes eventually get to origin/main (this may not true for all cases, like a shared topic/feature branches), and use 
#   something like this bash script:

REF=HEAD
SINCE=origin/develop
DIR_TO_CHECK=${PWD}

#    git merge-base finds best common ancestor(s) between two commits to use in a three-way merge. One common ancestor is better than another common ancestor if the latter is an
#    ancestor of the former. A common ancestor that does not have any better common ancestor is a best common ancestor, i.e. a merge base. Note that there can be more than one merge
#    base for a pair of commits.

MERGE_BASE=$(git merge-base ${SINCE} ${REF})
FILES_CHANGED=$(git diff --name-only ${MERGE_BASE}..${REF} -- ${DIR_TO_CHECK})
printf "Files changed:\n${FILES_CHANGED}\n"

if [[ -n $FILES_CHANGED ]]; then
  echo "Found changes"
else
  echo "No changes"
fi