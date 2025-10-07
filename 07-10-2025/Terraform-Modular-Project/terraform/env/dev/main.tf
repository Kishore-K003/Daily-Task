provider "aws" {
  region = var.region
}


module "vpc" {
  source               = "../../modules/vpc"
  name                 = "dev"
  vpc_cidr             = var.vpc_cidr
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
}


module "sg" {
  source               = "../../modules/sg"
  name                 = "dev"
  vpc_id               = module.vpc.vpc_id
  bastion_allowed_cidr = var.my_ip_cidr
}

module "bastion" {
  source    = "../../modules/instances"
  providers = { aws = aws}  

  name                = "bastion"
  ami                 = var.ami
  instance_type       = var.instance_type
  subnet_id           = module.vpc.public_subnet_ids[0]
  security_group_ids  = [module.sg.bastion_sg_id]
  associate_public_ip = true
  key_name            = var.key_name
}


module "webserver" {
  source    = "../../modules/instances"
  providers = { aws = aws }  

  name                = "webserver"
  ami                 = var.ami
  instance_type       = var.instance_type
  subnet_id           = module.vpc.private_subnet_ids[0]
  security_group_ids  = [module.sg.web_sg_id]
  associate_public_ip = false
  key_name            = var.key_name
}



module "alb" {
  source               = "../../modules/loadbalancer"
  name                 = "dev-alb"
  vpc_id               = module.vpc.vpc_id
  subnet_ids           = module.vpc.public_subnet_ids
  security_group_ids   = [module.sg.alb_sg_id]
  target_instance_ids  = [module.webserver.instance_id]  
  health_check_path    = "/"
}
