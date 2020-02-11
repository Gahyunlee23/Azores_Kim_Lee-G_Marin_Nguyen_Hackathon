#FROM is the base image for which we will run our application
FROM httpd:latest

# Copy files and directories from the application
COPY index.html /usr/local/apache2/htdocs/
COPY css/ /usr/local/apache2/htdocs/css/
COPY fonts/ /usr/local/apache2/htdocs/fonts/
COPY images/ /usr/local/apache2/htdocs/images/
COPY js/ /usr/local/apache2/htdocs/js/

# Tell Docker we are going to use this port
EXPOSE 80