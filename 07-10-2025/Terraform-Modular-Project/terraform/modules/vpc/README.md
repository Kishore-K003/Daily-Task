***VPC (Virtual Private Cloud)***
- A VPC is a private, isolated network within AWS where you can launch your resources securely.
It provides complete control over your IP address ranges, subnets, route tables, and gateways.

***Flow Overview:***
- Create VPC – Define a CIDR block (e.g., 10.0.0.0/16) to set the IP address range for your network.
- Create Subnets – Divide your VPC into smaller networks:
- Public Subnets: Used for resources that need internet access (like EC2 or ALB).
- Private Subnets: Used for internal resources (like databases or backend servers).

***Purpose:***
- Helps create a secure, scalable, and logically isolated network to host your AWS resources in an organized manner.
