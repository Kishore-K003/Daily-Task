***In Summary***
- Use the instances ***module*** to create two EC2 instances
- ***Bastion host*** in public subnet with public IP (for SSH access).
- ***Webserver*** in private subnet with no public IP (for security).

Then, create an Application Load Balancer (ALB) in the public subnet that:
- This ALB Routes HTTP traffic to the webserver (private EC2).
- Uses a health check to monitor the webserver’s status.

Additionally created a resuable module for creation of VPC, Security Groups, and Loadbalancer. 
