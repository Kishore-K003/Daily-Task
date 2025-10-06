provider "aws" {
    region = "us-east-2"
  
}

module "ec2_instance" {
    source = "./modules/ec2"
    region = "us-east-2"
    ami = "ami-0cfde0ea8edd312d4"
    instance_type = "t2.micro"
    subnet_id = "subnet-02875f0165dfdfb8b"
    key_name = "ohio"
    name = "MYEC2SERVER"
    
}