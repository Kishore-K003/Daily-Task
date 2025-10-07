***Security Groups***
- Security Groups act as virtual firewalls for controlling inbound and outbound traffic to AWS resources like EC2 instances or Load Balancers.

***Flow Overview:***
- aws_security_group "bastion" – Creates a security group for the Bastion host.
  - Ingress: Allows SSH (port 22) access only from the CIDR specified in var.bastion_allowed_cidr.
  - Egress: Allows all outbound traffic to anywhere (0.0.0.0/0).

- aws_security_group "web" – Creates a security group for web servers.
  - Ingress: Allows HTTP (port 80) traffic only from the ALB security group.
  - Egress: Allows all outbound traffic to anywhere (0.0.0.0/0).

- aws_security_group "alb" – Creates a security group for the Application Load Balancer (ALB).
  - Ingress: Allows HTTP (port 80) traffic from anywhere (0.0.0.0/0).
  - Egress: Allows all outbound traffic to anywhere (0.0.0.0/0).

***Purpose:***
- Enhances security by strictly controlling allowed network access and protecting AWS resources from unauthorized traffic.
