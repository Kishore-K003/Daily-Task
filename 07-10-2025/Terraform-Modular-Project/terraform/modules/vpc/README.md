***VPC (Virtual Private Cloud)***
- A VPC is a private, isolated network within AWS where you can launch your resources securely.
It provides complete control over your IP address ranges, subnets, route tables, and gateways.

***Flow Overview:***
- aws_vpc "this" – Creates a VPC with the CIDR block defined in var.vpc_cidr.
  - tags: Names the VPC using the var.name variable.

- aws_subnet "public" – Creates public subnets inside the VPC.
  - count: Creates as many subnets as there are CIDRs in var.public_subnet_cidrs.
  - vpc_id: Associates the subnet with the VPC.
  - map_public_ip_on_launch: Automatically assigns public IPs to instances launched in these subnets.
  - tags: Names each subnet uniquely using its index.

- aws_subnet "private" – Creates private subnets inside the VPC.
  - count: Creates as many subnets as there are CIDRs in var.private_subnet_cidrs.
  - vpc_id: Associates the subnet with the VPC.
  - map_public_ip_on_launch: Does not assign public IPs to instances launched in these subnets.
  - tags: Names each subnet uniquely using its index.

***Purpose:***
- Helps create a secure, scalable, and logically isolated network to host your AWS resources in an organized manner.
