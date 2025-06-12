## Steps for this Alt Cloud Task

## 1. Provisioning AWS EC2 Server
### Step 1: Launch EC2 Instance

-  Go to AWS Console > EC2 > Launch Instance
- Choose: Ubuntu Server 22.04 LTS (Free Tier eligible)
- Instance Type: t2.micro (Free Tier)
- Key Pair: Create new or use existing
- Security Group: Create new with these rules:

```js
SSH (22) - Your IP only
HTTP (80) - 0.0.0.0/0
HTTPS (443) - 0.0.0.0/0
```

### Step 2: Connect to Server
```js
ssh -i your-key.pem ubuntu@ec2-public-ip
```


## 2. Server Setup & Dependencies
### Update system:
```js
bashsudo apt update && sudo apt upgrade -y
```

### Install Node.js & npm:
```js
bashcurl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install Nginx:
```js
bashsudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
  ```


## 3. Deploy Your React App
### Build your app locally:
```js
npm run build
  ```

### Transfer files to server:
```js

````
