
 terraform init
 terraform validate
 terraform plan

 terraform workspace new production
 
 terraform workspace select development
 terraform plan
 terraform plan -var-file ./development.tfvars 
 terraform workspace show
 




export TF_LOG="DEBUG"

terraform state list

terraform state rm {resource_id}
