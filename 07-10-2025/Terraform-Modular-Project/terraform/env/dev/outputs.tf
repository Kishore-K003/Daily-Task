output "bastion_public_ip" {
  value = module.bastion.public_ip
}

output "webserver_private_ip" {
  value = module.webserver.private_ip
}

output "alb_dns" {
  value = module.alb.alb_dns
}
