Application Load Balancer (ALB) Flow
- This Terraform configuration provisions an Application Load Balancer (ALB) to distribute incoming traffic across multiple EC2 instances for high availability and scalability.

   - Flow Overview:
     - aws_lb – Creates the ALB which acts as the entry point for client traffic.
     - aws_lb_target_group – Defines the backend target group that holds EC2 instances and manages health checks.
     - aws_lb_listener – Listens on port 80 (HTTP) and forwards incoming requests to the target group.
     - aws_lb_target_group_attachment – Registers EC2 instances with the target group so they can receive traffic.

- Purpose:
  - Ensures even traffic distribution, automatic health monitoring, and improved fault tolerance for deployed applications.
