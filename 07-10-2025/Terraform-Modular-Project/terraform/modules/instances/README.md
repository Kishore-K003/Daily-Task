***EC2 Instances: Bastion & Web Servers***
- Bastion Host
  - Public subnet, with public IP.
  - Provides secure SSH access to private instances.
  - Security group allows SSH from trusted IPs.

- Web Servers
  - Private subnet, no public IP.
  - Hosts application, accessed via ALB or Bastion.
  - Security group allows HTTP from ALB and SSH from Bastion only.
- Purpose:
  - Secure, scalable setup separating public access and private resources.
