terraform {
  backend "s3" {
    bucket = "kishore-terraform-statefile-demo"
    region = "us-east-2"
    key = "kishore/terraform.tfstate"    
  }
}