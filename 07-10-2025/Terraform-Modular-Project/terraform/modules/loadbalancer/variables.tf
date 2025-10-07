variable "name" {
  type = string
}

variable "subnet_ids" {
  type = list(string)
}

variable "security_group_ids" {
  type = list(string)
}

variable "vpc_id" {
  type = string
}

variable "target_instance_ids" {
  type = list(string)
}

variable "health_check_path" {
  type = string
}
