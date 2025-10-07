***Security Groups***
- Security Groups act as virtual firewalls for controlling inbound and outbound traffic to AWS resources like EC2 instances or Load Balancers.

***Flow Overview:***

1) Inbound Rules – Define which traffic is allowed to enter your resource.
Example: Allow HTTP (port 80) or SSH (port 22) from specific IPs or networks.

2) Outbound Rules – Define which traffic is allowed to leave your resource.
Example: Allow all outbound traffic to the internet or specific destinations.

3) Association – Security groups are attached to resources (EC2, ALB, etc.) to enforce these rules at the instance or service level.

4) Stateful Behavior – If inbound traffic is allowed, the return traffic is automatically permitted (no need for a matching outbound rule).

***Purpose:***
- Enhances security by strictly controlling allowed network access and protecting AWS resources from unauthorized traffic.
