What is a State File?
- The state file (terraform.tfstate) keeps track of resources Terraform manages.
It allows Terraform to compare what’s deployed vs. what’s in your code.

What is a Remote Backend?
- A remote backend stores your Terraform state file in a central location (like S3, GCS, or Terraform Cloud).


Benefits:
- Shared state for teams
- Backup and recovery
- Version history

What is State Locking?
- State locking prevents multiple users from making changes at the same time.
For example, AWS S3 backend with DynamoDB can lock the state file
