# Localstack React Deployment to S3

## The Repository

This repository contains a docker compose file for localstack, and react app for testing deployment to s3 using localstack.

## To Deploy the app using localstack:

1. Clone the repository

2. Run the containers: `docker compose up -d`

3. Enter the container shell: `docker exec -it stacky bash`

4. Change directory to the my-site folder: `cd my-site`

5. Use localstack to create the s3 bucket: `awslocal s3api create-bucket --bucket my-site`

6. Upload files to the local s3 bucket: `awslocal s3 sync dist s3://my-site`

7. Apply the public access policy: `awslocal s3api put-bucket-policy --bucket my-site --policy file://policy.json`

The app can now be accessed locally at: [http://my-site.s3.localhost.localstack.cloud:4566/index.html](http://my-site.s3.localhost.localstack.cloud:4566/index.html)
