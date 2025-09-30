***I built a minimal Spring Boot app that reads its config from application.yaml, packaged it into a Docker image, deployed it to a local kind cluster, mounted application.yaml into the pod as a Kubernetes Secret, and wrapped everything as a Helm chart so others can install the app easily.***


1. Built Java Simple Spring Boot app
   - Created a simple REST API with /hello endpoint.
   - Reads message from application.yaml.


2. Dockerized the application
   - Built a Docker image so the app can run as a container.


3. Loaded into Kind
   - Used a local Kind Kubernetes cluster.
   - Loaded the Docker image into Kind’s nodes for deployment.


4. Created Kubernetes manifests
   - Defined Deployment and Service to run and expose the app.


5. Secret mounted - Application.yaml
   - Stored application.yaml in Kubernetes as a Secret.
   - Mounted it into the container at /config/application.yaml so that Spring Boot automatically picks it up.
   - This ensures sensitive config can be managed securely.


6. Wrapped everything in a Helm chart
   - Converted the manifests + secret into a Helm chart.
   - This makes the app easily reusable and shareable.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

_You Can Verify My Task Using the steps :_

Add my Helm repository 
- helm repo add demo-app https://kishore-kalaiselvan.github.io/helm-charts

Install the app 
- helm install myapp demo-app/demo-app

Forward the service port to access
- kubectl port-forward svc/myapp-demo-app 8080:8080

Open in browser
- http://localhost:8080/hello
  
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
_Here are the screenshots of the task :_

1. **Spring Boot app running locally**
2. **Built Docker Image of the java application**
3. **My Kind Cluster is running**
4. **Kubernetes deployment & service created**
5. **Secret mounted**
6. **Helm chart repo live on ArtifactHub**
7. **Helm install success**
   


