## Steps for this Alt Cloud Task

## 1. Step 1: Provisioning AWS EC2 Server
### Launch EC2 Instance

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

### Connect to Server
```js
ssh -i your-key.pem ubuntu@ec2-public-ip
```


## 2. Step 2: Server Setup & Dependencies
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


## 3. Step 3: Deploy Your React App
### Build your app locally:
```js
npm run build
  ```

### Transfer files to server:
```js
git clone your-repo-url
cd your-project
npm install
npm run build
````

## 4. Step 4: Configure Nginx
### Create Nginx config:

```js
sudo nano /etc/nginx/sites-available/your-app
```

### Add this configuration:

```js
server {
    listen 80;
    server_name kolade.site www.kolade.site;

    root /home/ubuntu/altcloud-task/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Enable the site:

```js
sudo ln -s /etc/nginx/sites-available/your-app /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### make the entire path readable:
chmod 755 /home/ubuntu
chmod -R 755 /home/ubuntu/altcloud-task



## 5. Step 5: Configure Domain DNS (GoDaddy)
```js
In your GoDaddy DNS settings, add these A record:
Type: A
Name: @
Value: 3.253.66.60
TTL: 600
```


## 6. Step 6: Configure SSL with Vertbot

```js
### Install snapd (if not already installed)
sudo apt install snapd

### Install Certbot
sudo snap install --classic certbot

### Create symlink
sudo ln -s /snap/bin/certbot /usr/bin/certbot

### Get SSL certificate for domain
sudo certbot --nginx -d kolade.site -d www.kolade.site
```


## Step 7: Setup Firewall
### Configure UFW firewall

```js
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### Check firewall status
```js
sudo ufw status
```


## 7. Step 8: Deploy
### Create deployment script
```js
nano /home/ubuntu/deploy.sh
```

```js
#!/bin/bash
echo "Starting deployment..."

cd /home/ubuntu/altcloud-task

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build application
npm run build

# Reload Nginx
sudo systemctl reload nginx

echo "Deployment complete!"
echo "Site accessible at: https://kolade.site"
  ```

### Make script executable
```js
chmod +x /home/ubuntu/deploy.sh
```
