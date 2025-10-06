What is IaC (Infrastructure as Code)?
  - Infrastructure as Code (IaC) is the process of managing and provisioning cloud infrastructure using code instead of manual processes.
It helps ensure consistency, version control, and automation.

What is Terraform?
- Terraform is an open-source IaC tool by HashiCorp that allows you to define, provision, and manage cloud resources (AWS, Azure, GCP, etc.) using configuration files written in HCL (HashiCorp Configuration Language).

Why Terraform?
- Supports multiple cloud providers.
- Declarative syntax – you define what you need, not how to create it.
- Reusable, version-controlled, and automated infrastructure.

Basic Terraform Code — EC2 Example is in code folder 

What is a State File?
- Terraform stores resource information in a state file (terraform.tfstate).
It keeps track of:
  - What resources exist
  - Their attributes and relationships
  - It helps Terraform know what to create, update, or destroy during execution.
