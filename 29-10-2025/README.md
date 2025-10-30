#### Implemented a two-tier API architecture using Express.js services deployed on EKS

- Public Api Gateway -> Can Get the Account Details /getaccount -> https://ei82wka6de.execute-api.ap-south-1.amazonaws.com
- Private Api Gateway -> Can Add the Bank account /addbankaccount -> https://9rl0js0t47.execute-api.ap-south-1.amazonaws.com


#### Public API Service (public-api-service)
- Exposes an endpoint /getaccount
- Deployed behind an internet-facing ALB
- Uses a VPC Link to securely connect to the Private API Service
- Retrieves stored account details from the private API and returns them to the user

#### Private API Service (private-api-service)
- Exposes an endpoint /addbankaccount
- Deployed behind an internal AWS ALB (Load Balancer) within the VPC
- Stores the account details in temporary in-memory storage
- Accessible only within the VPC (not public)

#### Screenshots
- `/addbankaccount`
  - ![](Screenshots/Post)
- `/getaccount`
  - ![](Screenshots/Get)
- API Gateway
  - ![](Screenshots/Api)
- Loadbalancers 
  - ![](Screenshots/Get) 
