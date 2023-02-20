# Define working dir because $(PWD) isn't fully cross-platform
dir=$(CURDIR)/terraform

.PHONY: git-diff   
git-diff:
	chmod +x ./git_diff.sh && ./git_diff.sh 

.PHONY: lint-cloud-storage   
lint-cloud-storage:
	cd $(dir)/cloud-storage && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-cloudamqp   
lint-cloudamqp:
	cd $(dir)/cloudamqp && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-core-database   
lint-core-database:
	cd $(dir)/core-database && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-cloud-storage   
lint-cloud-storage:
	cd $(dir)/cloud-storage && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-gke-cluster   
lint-gke-cluster:
	cd $(dir)/gke-cluster && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-k8s-manifest   
lint-k8s-manifest:
	cd $(dir)/k8s-manifest && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-redis   
lint-redis:
	cd $(dir)/redis && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-secrets-management   
lint-secrets-management:
	cd $(dir)/secrets-management && yamlfmt &&  TFLINT_LOG=debug tflint --minimum-failure-severity=error 

.PHONY: lint-all   
lint-all:
	yamlfmt &&  TFLINT_LOG=debug tflint --recursive --minimum-failure-severity=error 