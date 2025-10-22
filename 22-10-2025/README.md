Currency App Deployment on EKS and setting up monitoring Dashboard

- Created EKS Cluster
  - Set up a new EKS cluster with a managed node group.

- Deployed the Website
  - Deployed the currency-app Docker image to the cluster using Kubernetes Deployment and Service.
  - Exposed the app externally via a LoadBalancer service.

- Installed Monitoring Tools
  - Installed Prometheus and Grafana using Helm.
  - Monitored basic metrics such as CPU usage, memory usage, and pod counts.

- Accessed Grafana Dashboard
  - Port-forwarded Grafana service to access the dashboard locally.
  - Verified that CPU, memory, and pod metrics are visible.
