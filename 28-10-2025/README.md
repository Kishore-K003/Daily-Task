### Helm Chart for Simple API

### Steps I Followed

1. Created a Docker image for the Node.js Api service App.  
2. Verified the app was running locally using the container.  
3. Created a new Helm chart using `helm create simple-api`.  
4. Updated `deployment.yaml` and `service.yaml` with app image and ports.  
5. Added configuration values in `values.yaml` for easy customization.  
6. Tested the chart locally using `helm lint` and `helm template`.  


