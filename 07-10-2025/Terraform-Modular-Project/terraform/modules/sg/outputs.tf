output "bastion_sg_id" {
  value = aws_security_group.bastion.id
}

output "web_sg_id" {
  value = aws_security_group.web.id
}

output "alb_sg_id" {
  value = aws_security_group.alb.id
}
